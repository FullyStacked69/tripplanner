const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateDayInput = [
    check('accommodation')
        .exists({ checkFalsy: true })
        .withMessage('Accommodation must be provided'),
    handleValidationErrors
];

module.exports = validateDayInput;
