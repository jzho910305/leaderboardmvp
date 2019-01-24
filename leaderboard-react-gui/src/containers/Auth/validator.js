export const checkValidity = (value, rule) => {
    let isValid = true;

    if (rule.required) isValid = isRequired(value) && isValid;
    if (rule.minLength) isValid = isMinLength(value, rule.minLength)  && isValid;

    return isValid;

};

const isRequired = value => value.trim() !== '';
const isMinLength = (value, length) => value.length >= length;