const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateItineraryInput = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Title must be provided'),
  check('length')
    .notEmpty()
    .isInt({ min: 0 })
    .withMessage('Must provide a valid trip length'),
  check('locationType')
    .exists({ checkFalsy: true })
    .withMessage('Location type must be provided'),
  check('countryCode')
    .exists({ checkFalsy: true })
    .withMessage('Country code must be provided'),
  check('locationName')
    .exists({ checkFalsy: true })
    .withMessage('Location name must be provided'),
  check('lng')
    .notEmpty()
    .isNumeric()
    .withMessage('Longitude must be a number'),
  check('lat')
    .notEmpty()
    .isNumeric()
    .withMessage('Latitude must be a number'),
  check('author')
    .exists({ checkFalsy: true })
    .withMessage('Author ID must be provided'),
  handleValidationErrors
];

module.exports = validateItineraryInput;
