const express = require('express');

const mongoose = require('mongoose');
const Itinerary = mongoose.model('Itinerary');
const Day = mongoose.model('Day');
const Activity = mongoose.model('Activity')
const User = mongoose.model('User')
const Like = mongoose.model('Like');

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

  try {
    const itineraries = await Itinerary.find({ author: req.params.userId })
                                        .sort({ createdAt: -1 })
                                        .populate({
                                          path: 'days', 
                                          populate: {path: 'activities'}
                                        })
                                        .populate('author', '_id username');
    return res.json(itineraries);
  }
  catch(err) {
    return res.json([]);
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id)
                                      .populate({
                                        path: 'days', 
                                        populate: {path: 'activities'}
                                      })
                                      .populate('author', '_id username');
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
        if(newDayActs[j]){
          const {lat, lng, name, formatted_address, formatted_phone_number, rating, user_ratings_total, place_id, imageUrl} = newDayActs[j]
          const newAct = await new Activity({
            name,
            formatted_address,
            formatted_phone_number,
            rating,
            user_ratings_total,
            place_id,
            imageUrl,
            lat,
            lng
          }).save()
          activities.push(newAct._id)
        }
      }
        
      const newDay = await new Day({
        activities
      }).save()
      days.push(newDay._id)
      
    }
    
    const { title, length, startDate, locationName, lat, lng } = req.body
    
    const newItiniterary = new Itinerary({
      title,
      length,
      author: req.body.user._id,
      startDate,
      locationName,
      days,
      lat,
      lng
    });

    let itinerary = await newItiniterary.save();
    itinerary = await itinerary.populate({
                                  path: 'days', 
                                  populate: {path: 'activities'}
                                })
                                
    return res.json(itinerary);
  }
  catch(err) {
    next(err);
  }
});

router.patch('/:itineraryId', async (req, res, next) => {
  try{

    const { title, startDate, lat, lng } = req.body.update
    const upDays = req.body.update.days
    const length = upDays.length

    let days = []
    
    for(let i = 0; i < length; i++){
      
      const upDay = upDays[i]
      const upActs = upDay.activities
      const actLen = upActs.length

      let activities = []
      
      for (let j = 0; j < actLen; j++){

        const upAct = upActs[j]
        let activity;
        if(upAct && upAct._id){
          activity = await Activity.findByIdAndUpdate(upAct._id, upAct)
        } else {
          activity = await new Activity(upAct).save()
        }
        activities.push(activity._id)
      }

      let day = {
        activities
      }
      
      if(upDay._id){
        day = await Day.findByIdAndUpdate(upDay._id, day)
      }else{
        day = await new Day(day).save()
      }
      days.push(day._id)   
    }
    
    const patch = {
      startDate,
      title,
      length,
      days,
      lat,
      lng
    }

    const it = await Itinerary.findByIdAndUpdate(req.params.itineraryId, patch)
    return res.json(await Itinerary.findById(req.params.itineraryId))
  } catch(err){
    next(err)
  }
})


//add like 
router.post('/:itineraryId/like', requireUser, async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    
    if (!itinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }

    const userId = req.user._id;

    // Check if the user already liked the itinerary
    const existingLike = await Like.findOne({ user: userId, itinerary: itinerary._id });
    
    if (existingLike) {
      return res.status(400).json({ error: 'User already liked this itinerary' });
    }
    
    // User has not liked it before, so add a like
    const newLike = new Like({ user: userId });
    await newLike.save();
    
    // Add the Like object ID to the itinerary's likes array
    itinerary.likes.push(newLike._id);
    await itinerary.save();
    
    // Return the updated itinerary with likes
    const updatedItinerary = await Itinerary.findById(req.params.itineraryId).populate('likes');
    return res.json(updatedItinerary);
  } catch (err) {
    next(err);
  }
});

router.delete('/:itineraryId/like', requireUser, async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);

    if (!itinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }

    

    // Find all likes for this itinerary
    const likesToRemove = await Like.find({ itinerary: itinerary._id });

    if (likesToRemove.length === 0) {
      return res.status(400).json({ error: 'User has not liked this itinerary' });
    }

    // Remove all likes found
    for (const like of likesToRemove) {
      await like.remove();
      itinerary.likes.pull(like._id);
    }

    await itinerary.save();

    // Return the updated itinerary with likes
    const updatedItinerary = await Itinerary.findById(req.params.itineraryId).populate('likes');
    return res.json(updatedItinerary);
  } catch (err) {
    next(err);
  }
});

router.delete('/:itineraryId', async (req, res, next) => {
  try{
    const it = await Itinerary.findByIdAndDelete(req.params.itineraryId)
    return res.json(it)
  }catch(err){
    next(err)
  }
})

// Patch route to toggle fakeViews
router.patch('/:itineraryId/fakeviews', async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);

    if (!itinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }

    // Toggle the fakeViews field
    itinerary.fakeViews = !itinerary.fakeViews;

    await itinerary.save();

    // Return the updated itinerary with fakeViews
    return res.json(itinerary);
  } catch (err) {
    next(err);
  }
});

module.exports = router;