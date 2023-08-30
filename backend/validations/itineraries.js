const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

// validateTweetInput is a combination Express middleware that uses the `check`
// middleware to validate the keys in the body of a request to create/edit
// a tweet
const validateItineraryInput = [
  check('title')
    .exists({ checkFalsy: true })
    .isLength({ min: 4, max: 140 })
    .withMessage('Title must be between 5 and 140 characters'),
  check('length')
    .notEmpty()
    .isInt({min: 0})
    .withMessage('Must provide a trip length'),
  check('author')
    .exists({checkFalsy: true})
    .withMessage('Must provide an author'),
  handleValidationErrors
];

module.exports = validateItineraryInput;