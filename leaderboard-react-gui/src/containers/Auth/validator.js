export const checkValidity = (value, rule) => {
    let isValid = true;

    if (rule.required) isValid = isRequired(value) && isValid;
    if (rule.minLength) isValid = isMinLength(value, rule.minLength) && isValid;
    if (rule.isEmail) isValid = isEmail(value) && isValid;

    return isValid;

};

const isRequired = value => value.trim() !== '';
const isMinLength = (value, length) => value.length >= length;
const isEmail = value => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value);