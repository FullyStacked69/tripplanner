const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateItineraryDayInput = [
    check('day')
        .exists({ checkFalsy: true })
        .withMessage('Day ID must be provided'),
    check('itinerary')
        .exists({ checkFalsy: true })
        .withMessage('Itinerary ID must be provided'),
    handleValidationErrors
];

module.exports = validateItineraryDayInput;
