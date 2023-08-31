const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');

const User = require('../models/User');
const Itinerary = require('../models/Itinerary');
const Activity = require('../models/Activity');
const Day = require('../models/Day');
const ActivityDay = require('../models/ActivityDay');
const ItineraryDay = require('../models/ItineraryDay');
const bcrypt = require('bcryptjs');

const users = [];

const u1 = new User({
  username: 'seed1',
  email: 'seed1@seed.com',
  hashedPassword: bcrypt.hashSync('password', 10)
});
users.push(u1);

const u2 = new User({
  username: 'willyFog',
  email: 'willy@mail.com',
  hashedPassword: bcrypt.hashSync('password', 10)
})
users.push(u2);

const u3 = new User({
  username: 'kimJongun',
  email: 'kim@mail.com',
  hashedPassword: bcrypt.hashSync('password', 10)
})
users.push(u3);

const u4 = new User({
  username: 'jackieChan',
  email: 'jackie@mail.com',
  hashedPassword: bcrypt.hashSync('password', 10)
})
users.push(u4);

const itineraries = [];
const activities = [];
const days = [];
const activityDays = [];
const itineraryDays = [];

const itinerary1 = new Itinerary({
  title: "Iceland: Nature's Wonders",
  locationType: 'country',
  countryCode: 'IS',
  locationName: 'Iceland',
  lng: -19.02,
  lat: 64.96,
  author: u2._id,
  length: 5,
});

itineraries.push(itinerary1);

const itinerary1Agenda = [
  // Day 1
  {
    accommodation: 'Harbor Hotel Reykjavik',
    activities: ['Golden Circle Tour']
  },
  // Day 2
  {
    accommodation: 'Blue Lagoon Spa Hotel',
    activities: ['Blue Lagoon', 'Reykjavik City Tour']
  },
  // Day 3
  {
    accommodation: 'Hofn Glacier Inn',
    activities: ['Glacier Hike', 'Waterfall Expedition']
  },
  // Day 4
  {
    accommodation: 'Akureyri Guesthouse',
    activities: ['Whale Watching', 'Hot Springs Relaxation']
  },
  // Day 5
  {
    accommodation: 'CenterHotel Midgardur',
    activities: ['Reykjavik Exploration']
  }
];

// Loop through each day in itinerary1Agenda
itinerary1Agenda.forEach((dayData, index) => {
  const day = new Day({
    accommodation: dayData.accommodation,
  });
  days.push(day);

  dayData.activities.forEach(activityTitle => {
    const activity = new Activity({
      title: activityTitle,
      length: 1,
    });
    activities.push(activity);

    const activityDay = new ActivityDay({
      day: day._id,
      activity: activity._id,
    });
    activityDays.push(activityDay);
  });

  const itineraryDay = new ItineraryDay({
    day: day._id,
    itinerary: itinerary1._id,
  });
  itineraryDays.push(itineraryDay);
});

const itinerary2 = new Itinerary({
  title: 'Iceland Adventure',
  locationType: 'country',
  countryCode: 'IS',
  locationName: 'Iceland',
  lng: -19.02,
  lat: 64.96,
  author: u3._id,
  length: 6,
});

itineraries.push(itinerary2);

const itinerary2Agenda = [
  // Day 1
  {
    accommodation: 'Hotel Borg',
    activities: ['Golden Circle Tour']
  },
  // Day 2
  {
    accommodation: 'Hofn Glacier Inn',
    activities: ['Blue Lagoon', 'Volcano Trek']
  },
  // Day 3
  {
    accommodation: 'Fosshotel Vatnajokull',
    activities: ['Glacier Hike', 'Waterfall Expedition', 'Ice Cave Tour']
  },
  // Day 4
  {
    accommodation: 'Akureyri Guesthouse',
    activities: ['Whale Watching', 'Hot Springs Relaxation']
  },
  // Day 5
  {
    accommodation: 'Reykjavik Marina Residence',
    activities: ['Snorkeling Adventure', 'Reykjavik Nightlife']
  },
  // Day 6
  {
    accommodation: 'Hotel Glymur',
    activities: ['Black Sand Beach Visit', 'Northern Lights Hunt']
  }
];

// Loop through each day in itinerary2Agenda
itinerary2Agenda.forEach((dayData, index) => {
  const day = new Day({
    accommodation: dayData.accommodation,
  });
  days.push(day);

  dayData.activities.forEach(activityTitle => {
    const activity = new Activity({
      title: activityTitle,
      length: 1,
    });
    activities.push(activity);

    const activityDay = new ActivityDay({
      day: day._id,
      activity: activity._id,
    });
    activityDays.push(activityDay);
  });

  const itineraryDay = new ItineraryDay({
    day: day._id,
    itinerary: itinerary2._id,
  });
  itineraryDays.push(itineraryDay);
});

const itinerary3 = new Itinerary({
  title: 'Iceland Explorer',
  locationType: 'country',
  countryCode: 'IS',
  locationName: 'Iceland',
  lng: -19.02,
  lat: 64.96,
  author: u4._id,
  length: 7,
});

itineraries.push(itinerary3);

const itinerary3Agenda = [
  // Day 1
  {
    accommodation: 'Canopy by Hilton Reykjavik City Centre',
    activities: ['Golden Circle Tour', 'Local Cuisine Tasting']
  },
  // Day 2
  {
    accommodation: 'Fosshotel Reykjavik',
    activities: ['Blue Lagoon', 'Volcano Trek', 'Reykjavik Art Galleries']
  },
  // Day 3
  {
    accommodation: 'Hotel Skogafoss',
    activities: ['Glacier Hike', 'Waterfall Expedition', 'Ice Cave Tour']
  },
  // Day 4
  {
    accommodation: 'Husavik Cape Hotel',
    activities: ['Whale Watching', 'Hot Springs Relaxation', 'Cultural Experience']
  },
  // Day 5
  {
    accommodation: 'CenterHotel Thingholt',
    activities: ['Snorkeling Adventure', 'Reykjavik Nightlife']
  },
  // Day 6
  {
    accommodation: 'Fosshotel Eastfjords',
    activities: ['Black Sand Beach Visit', 'Northern Lights Hunt']
  },
  // Day 7
  {
    accommodation: 'Icelandair Hotel Vik',
    activities: ['Fjord Exploration', 'Local Markets Visit']
  }
];

// Loop through each day in itinerary3Agenda
itinerary3Agenda.forEach((dayData, index) => {
  const day = new Day({
    accommodation: dayData.accommodation,
  });
  days.push(day);

  dayData.activities.forEach(activityTitle => {
    const activity = new Activity({
      title: activityTitle,
      length: 1,
    });
    activities.push(activity);

    const activityDay = new ActivityDay({
      day: day._id,
      activity: activity._id,
    });
    activityDays.push(activityDay);
  });

  const itineraryDay = new ItineraryDay({
    day: day._id,
    itinerary: itinerary3._id,
  });
  itineraryDays.push(itineraryDay);
});

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    insertSeeds();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

const insertSeeds = () => {
  console.log("Resetting db and seeding users, itineraries, activities, days, activityDays, and itineraryDays...");

  User.collection.drop()
    .then(() => Itinerary.collection.drop())
    .then(() => Activity.collection.drop())
    .then(() => Day.collection.drop())
    .then(() => ActivityDay.collection.drop())
    .then(() => ItineraryDay.collection.drop())
    .then(() => User.insertMany(users))
    .then(() => Itinerary.insertMany(itineraries))
    .then(() => Activity.insertMany(activities))
    .then(() => Day.insertMany(days))
    .then(() => ActivityDay.insertMany(activityDays))
    .then(() => ItineraryDay.insertMany(itineraryDays))
    .then(() => {
      console.log("Done!");
      mongoose.disconnect();
    })
    .catch(err => {
      console.error(err.stack);
      process.exit(1);
    });
};
