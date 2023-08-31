const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateActivityInput = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Title must be provided'),
    check('length')
        .notEmpty()
        .isInt({ min: 0 })
        .withMessage('Must provide a valid activity length'),
    handleValidationErrors
];

module.exports = validateActivityInput;
