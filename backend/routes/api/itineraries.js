const express = require('express');

const mongoose = require('mongoose');
const Itinerary = mongoose.model('Itinerary');
const Day = mongoose.model('Day');
const Activity = mongoose.model('Activity')

const validateItineraryInput = require('../../validations/itineraries');
const { requireUser } = require('../../config/passport');
const { isProduction } = require('../../config/keys');
const { capitalizeFirstLetter } = require('./locations');

const router = express.Router();


router.get('/', async (req, res) => {
  const { location, itineraryId } = req.query;
  try {
    let itineraries;
    let itinerary;
    if (location) {
      itineraries = await Itinerary.find({ locationName: location })

        .populate({
          path: 'days', 
          populate: {path: 'activities'}
        })
        .populate('author', '_id username')

        .sort({ createdAt: -1 });
    } else if (itineraryId) {
      itinerary = await Itinerary.findById(itineraryId)
                                  .populate({
                                      path: 'days', 
                                      populate: {path: 'activities'}
                                    })
                                    .populate('author', '_id username')
      return res.json(itinerary)
    } else {
      itineraries = await Itinerary.find()

        .populate({
          path: 'days',
          populate: { path: 'activities' }
        })
        .populate('author', '_id username')
      

        .sort({ createdAt: -1 });
    }
    
    

    return res.json(itineraries);
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
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

  router.post('/', async (req, res, next) => {
    try {

      const newDays = req.body.days
      let days = []

      for(let i = 0; i < newDays.length; i++){
        
        const newDayActs = newDays[i].activities
        let activities = []
        
        for(let j = 0; j < newDayActs.length; j++){
          const {name, formatted_address, formatted_phone_number, rating, user_ratings_total, place_id, imageUrl} = newDayActs[j]
          const newAct = new Activity({
            name,
            formatted_address,
            formatted_phone_number,
            rating,
            user_ratings_total,
            place_id,
            imageUrl
          })
          activities.push(newAct)
        }
         
        const newDay = new Day({
          accommodation: newDays[i].accommodation,
          activities
        })
        days.push(newDay)
        
      }

      const {title, length,  lng, lat, startDate, locationName, countryCode, locationType } = req.body
      
      const newItiniterary = new Itinerary({
        title,
        length,
        author: req.body.user._id,
        lng,
        lat,
        startDate,
        locationName,
        locationType,
        countryCode,
        days
      });
  
      let itinerary = await newItiniterary.save();
      itinerary = await itinerary.populate('author', '_id username');
      return res.json(itinerary);
    }
    catch(err) {
      next(err);
    }
  });

  // router.patch('/:itineraryId', async (req, res, next) => {
  //   try{
  //     const { title, startDate } = req.body.update
  //     const oldDays = req.body.update.days
  //     const length = oldDays.length

  //     let days = []
      
  //     for(let i = 0; i < length; i++){
        
  //       const oldActs = oldDays[i].activities
  //       const actLen = oldActs.length

  //       let activities = []
        
  //       for (let j = 0; j < actLen; j++){

  //         const oldAct = oldActs[j]
  //         const activity = new Activity({name:  })
          
  //       }
        
  //     }
      
  //     const patch = {
  //       startDate,
  //       title,
  //       length
  //     }
  //     const it = await Itinerary.findByIdAndUpdate(req.params.itineraryId, patch)
  //     return res.json(it)
  //   } catch(err){
  //     next(err)
  //   }
  // })

  router.delete('/:itineraryId', async (req, res, next) => {
    try{
      const it = await Itinerary.findByIdAndDelete(req.params.itineraryId)
      return res.json(it)
    }catch(err){
      next(err)
    }
  })

module.exports = router;