const express = require('express');

const mongoose = require('mongoose');
const Itinerary = mongoose.model('Itinerary');

const validateItineraryInput = require('../../validations/itineraries');


const router = express.Router();

/* GET itineraries listing. */
router.get('/', function(req, res, next) {
    res.json({
      message: "GET /api/itineraries"
    });
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
        author: req.user._id
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