const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateActivityDayInput = [
    check('day')
        .exists({ checkFalsy: true })
        .withMessage('Day ID must be provided'),
    check('activity')
        .exists({ checkFalsy: true })
        .withMessage('Activity ID must be provided'),
    handleValidationErrors
];

module.exports = validateActivityDayInput;
