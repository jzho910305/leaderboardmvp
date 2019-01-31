const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');


const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            minLength: 1,
            unique: true,
            validate: {
                validator: value => validator.isEmail(value),
                message: '{VALUE} is not a valid email.'
            }
        },
        password: {
            type: String,
            required: true,
            minLength: 6
        },
        token: [{
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }]
    }
);

schema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

schema.methods.generateAuthToken = function () {
    const user = this;
    const access = 'auth';
    const token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();

    user.tokens = [{access, token}];

    return user.save().then(
        () => {
            return token;
        }
    );
};

schema.methods.removeToken = function (token) {
    const user = this;

    return user.update({
        $pull: {
            tokens: {token}
        }
    });
};

schema.statics.findByToken = function (token) {
    const User = this;
    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

schema.statics.findByCredentials = function (email, password) {
    const User = this;

    return User.findOne({email}).then(
        (user) => {
            if (!user) {
                return Promise.reject();
            }

            return new Promise((resolve, reject) => {
                bcrypt.compare(password, user.password).then(
                    () => {
                        resolve(user);

                    },
                    () => {
                        reject();
                    }
                );
            });
        });
};

schema.pre('save', function (next) {
    const user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

const User = mongoose.model('User', schema);

module.exports = {User};
