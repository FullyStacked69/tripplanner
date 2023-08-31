const express = require('express');

const mongoose = require('mongoose');
const Itinerary = mongoose.model('Itinerary');

const validateItineraryInput = require('../../validations/itineraries');
const { requireUser } = require('../../config/passport');
const { isProduction } = require('../../config/keys');
const { capitalizeFirstLetter } = require('./locations');

const router = express.Router();

/* GET itineraries listing. */
router.get('/', async (req, res) => {
  const { location } = req.query;
  try {
    let itineraries;
    if (location) {
      itineraries = await Itinerary.find({ locationName: capitalizeFirstLetter(location) })
        .populate({
          path: 'days',
          populate: {
            path: 'activities',
            model: 'Activity'
          }
        })
        .sort({ createdAt: -1 });
    } else {
      itineraries = await Itinerary.find()
        .populate({
          path: 'days',
          populate: {
            path: 'activities',
            model: 'Activity'
          }
        })
        .sort({ createdAt: -1 });
    }
    return res.json(itineraries);
  } catch (err) {
    return res.json([]);
  }
});

router.get('/user/:userId', async (req, res, next) => {
    let user;
    try {
      user = await User.findById(req.params.userId);
    } catch(err) {
      const error = new Error('User not found');
      error.statusCode = 404;
      error.errors = { message: "No user found with that id" };
      return next(error);
    }
    try {
      const itineraries = await Itinerary.find({ author: user._id })
                                .sort({ createdAt: -1 })
                                .populate("author", "_id username");
      return res.json(itineraries);
    }
    catch(err) {
      return res.json([]);
    }
  })
  
  router.get('/:id', async (req, res, next) => {
    try {
      const itinerary = await Itinerary.findById(req.params.id)
                               .populate("author", "_id username");
      return res.json(itinerary);
    }
    catch(err) {
      const error = new Error('Itinerary not found');
      error.statusCode = 404;
      error.errors = { message: "No Itinerary found with that id" };
      return next(error);
    }
  });

  router.post('/', requireUser, validateItineraryInput, async (req, res, next) => {
    try {
      const newItiniterary = new Itinerary({
        title: req.body.title,
        length: req.body.length,
        partOf: req.body.partOf,
        author: req.user._id,
        lng: req.body.lng,
        lat: req.body.lat
      });
  
      let itinerary = await newItiniterary.save();
      itinerary = await itinerary.populate('author', '_id username');
      return res.json(itinerary);
    }
    catch(err) {
      next(err);
    }
  });

module.exports = router;