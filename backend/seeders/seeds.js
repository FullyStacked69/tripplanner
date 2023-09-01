const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');

const User = require('../models/User');
const Itinerary = require('../models/Itinerary');
const Activity = require('../models/Activity');
const Day = require('../models/Day');
const bcrypt = require('bcryptjs');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(async () => {
    console.log('Connected to MongoDB successfully');
    await insertSeeds();
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

const insertSeeds = async () => {
  console.log("Resetting db and seeding users, itineraries, activities, and days...");

  try {
    await User.collection.drop();
    await Itinerary.collection.drop();
    await Activity.collection.drop();
    await Day.collection.drop();

    // Hardcode users
    const users = [];

    const u1 = new User({
      username: 'seed1',
      email: 'seed1@seed.com',
      hashedPassword: bcrypt.hashSync('password', 10)
    });
    users.push(u1);

    const u2 = new User({
      username: 'Bilbo Baggins',
      email: 'willy@mail.com',
      hashedPassword: bcrypt.hashSync('password', 10)
    });
    users.push(u2);

    const u3 = new User({
      username: 'Eowyn Snow',
      email: 'kim@mail.com',
      hashedPassword: bcrypt.hashSync('password', 10)
    });
    users.push(u3);

    const u4 = new User({
      username: 'Legolas Rivers',
      email: 'jackie@mail.com',
      hashedPassword: bcrypt.hashSync('password', 10)
    });
    users.push(u4);

    const createdUsers = await User.insertMany(users);

    const activities = []

    const act1 = new Activity({
      title: 'Golden Circle Tour',
      length: 1
    });
    activities.push(act1);

    const act2 = new Activity({
      title: 'Blue Lagoon',
      length: 1
    });
    activities.push(act2);

    const act3 = new Activity({
      title: 'Reykjavik City Tour',
      length: 1
    });
    activities.push(act3);

    const act4 = new Activity({
      title: 'Glacier Hike',
      length: 1
    });
    activities.push(act4);

    const act5 = new Activity({
      title: 'Waterfall Expedition',
      length: 1
    });
    activities.push(act5);

    const act6 = new Activity({
      title: 'Whale Watching',
      length: 1
    });
    activities.push(act6);

    const act7 = new Activity({
      title: 'Hot Springs Relaxation',
      length: 1
    });
    activities.push(act7);

    const act8 = new Activity({
      title: 'Volcano Trek',
      length: 1
    });
    activities.push(act8);

    const act9 = new Activity({
      title: 'Ice Cave Tour',
      length: 1
    });
    activities.push(act9);

    const act10 = new Activity({
      title: 'Snorkeling Adventure',
      length: 1
    });
    activities.push(act10);

    const act11 = new Activity({
      title: 'Northern Lights Hunt',
      length: 1
    });
    activities.push(act11);

    const act12 = new Activity({
      title: 'Black Sand Beach Visit',
      length: 1
    });
    activities.push(act12);

    const act13 = new Activity({
      title: 'Fjord Exploration',
      length: 1
    });
    activities.push(act13);

    const act14 = new Activity({
      title: 'Local Cuisine Tasting',
      length: 1
    });
    activities.push(act14);

    const act15 = new Activity({
      title: 'Reykjavik Art Galleries',
      length: 1
    });
    activities.push(act15);

    const act16 = new Activity({
      title: 'Cultural Experience',
      length: 1
    });
    activities.push(act16);

    const act17 = new Activity({
      title: 'Reykjavik Exploration',
      length: 1
    });
    activities.push(act17);

    const act18 = new Activity({
      title: 'Volcano Exploration',
      length: 1
    });
    activities.push(act18);

    const act19 = new Activity({
      title: 'Nature Photography',
      length: 1
    });
    activities.push(act19);

    const act20 = new Activity({
      title: 'Mountain Trek',
      length: 1
    });
    activities.push(act20);

    const act21 = new Activity({
      title: 'Wildlife Safari',
      length: 1
    });
    activities.push(act21);

    const act22 = new Activity({
      title: 'Bird Watching',
      length: 1
    });
    activities.push(act22);

    const act23 = new Activity({
      title: 'Historical Tour',
      length: 1
    });
    activities.push(act23);

    const act24 = new Activity({
      title: 'Museum Visits',
      length: 1
    });
    activities.push(act24);

    const act25 = new Activity({
      title: 'Local Markets Visit',
      length: 1
    });
    activities.push(act25);

    const act26 = new Activity({
      title: 'Boat Excursion',
      length: 1
    });
    activities.push(act26);

    const act27 = new Activity({
      title: 'Mountain Biking',
      length: 1
    });
    activities.push(act27);

    const act28 = new Activity({
      title: 'Horseback Riding',
      length: 1
    });
    activities.push(act28);

    const act29 = new Activity({
      title: 'Kayaking Adventure',
      length: 1
    });
    activities.push(act29);

    const act30 = new Activity({
      title: 'Nature Walk',
      length: 1
    });
    activities.push(act30);

    const act31 = new Activity({
      title: 'Forest Exploration',
      length: 1
    });
    activities.push(act31);

    const act32 = new Activity({
      title: 'Scenic Drive',
      length: 1
    });
    activities.push(act32);

    const act33 = new Activity({
      title: 'Local Art Workshop',
      length: 1
    });
    activities.push(act33);

    const act34 = new Activity({
      title: 'Adventure Photography',
      length: 1
    });
    activities.push(act34);

    const act35 = new Activity({
      title: 'Sailing Excursion',
      length: 1
    });
    activities.push(act35);

    const act36 = new Activity({
      title: 'Nature Meditation',
      length: 1
    });
    activities.push(act36);

    const act37 = new Activity({
      title: 'Tokyo Tower Visit',
      length: 1
    });
    activities.push(act37);

    const act38 = new Activity({
      title: 'Shibuya Crossing Experience',
      length: 1
    });
    activities.push(act38);

    const act39 = new Activity({
      title: 'Asakusa Temple Tour',
      length: 1
    });
    activities.push(act39);

    const act40 = new Activity({
      title: 'Tsukiji Fish Market Visit',
      length: 1
    });
    activities.push(act40);

    const act41 = new Activity({
      title: 'Harajuku Shopping Spree',
      length: 1
    });
    activities.push(act41);

    const act42 = new Activity({
      title: 'Sumo Wrestling Match',
      length: 1
    });
    activities.push(act42);

    const act43 = new Activity({
      title: 'Akihabara Electronics Hunt',
      length: 1
    });
    activities.push(act43);

    const act44 = new Activity({
      title: 'Ginza Luxury Shopping',
      length: 1
    });
    activities.push(act44);

    const act45 = new Activity({
      title: 'Meiji Shrine Visit',
      length: 1
    });
    activities.push(act45);

    const act46 = new Activity({
      title: 'Ueno Park Exploration',
      length: 1
    });
    activities.push(act46);

    const act47 = new Activity({
      title: 'Santa Barbara Castle Visit',
      length: 1
    });
    activities.push(act47);

    const act48 = new Activity({
      title: 'Explanada de España Walk',
      length: 1
    });
    activities.push(act48);

    const act49 = new Activity({
      title: 'Alicante Beach Relaxation',
      length: 1
    });
    activities.push(act49);

    const act50 = new Activity({
      title: 'Alicante Old Town Tour',
      length: 1
    });
    activities.push(act50);

    const act51 = new Activity({
      title: 'San Nicolas Cathedral Visit',
      length: 1
    });
    activities.push(act51);

    const act52 = new Activity({
      title: 'Alicante Marina Scenic Views',
      length: 1
    });
    activities.push(act52);

    const act53 = new Activity({
      title: 'Mercado Central Shopping',
      length: 1
    });
    activities.push(act53);

    const act54 = new Activity({
      title: 'Museo Volvo Ocean Race',
      length: 1
    });
    activities.push(act54);

    // Activity 55
    const act55 = new Activity({
      title: 'Visit the British Museum',
      length: 3
    });
    activities.push(act55);

    // Activity 56
    const act56 = new Activity({
      title: 'Explore the Tower of London',
      length: 2
    });
    activities.push(act56);

    // Activity 57
    const act57 = new Activity({
      title: 'Take a ride on the London Eye',
      length: 1
    });
    activities.push(act57);

    // Activity 58
    const act58 = new Activity({
      title: 'Visit Buckingham Palace',
      length: 2
    });
    activities.push(act58);

    // Activity 59
    const act59 = new Activity({
      title: 'Stroll through Hyde Park',
      length: 1
    });
    activities.push(act59);

    // Activity 60
    const act60 = new Activity({
      title: 'Explore the Natural History Museum',
      length: 3
    });
    activities.push(act60);

    // Activity 61
    const act61 = new Activity({
      title: 'Visit the Tate Modern',
      length: 2
    });
    activities.push(act61);

    // Activity 62
    const act62 = new Activity({
      title: 'Take a Thames River Cruise',
      length: 1
    });
    activities.push(act62);

    // Activity 63
    const act63 = new Activity({
      title: 'Enjoy a West End Theatre Show',
      length: 3
    });
    activities.push(act63);

    // Activity 64
    const act64 = new Activity({
      title: 'Visit the Royal Observatory in Greenwich',
      length: 2
    });
    activities.push(act64);




    const createdActivities = await Activity.insertMany(activities);

    const days = [];

    // Day 1
    const day1Activities = [act1.id, act2.id];
    const d1 = new Day({
      accommodation: 'Harbor Hotel Reykjavik',
      activities: day1Activities
    });
    days.push(d1);

    // Day 2
    const day2Activities = [act3.id, act4.id, act5.id];
    const d2 = new Day({
      accommodation: 'Blue Lagoon Spa Hotel',
      activities: day2Activities
    });
    days.push(d2);

    // Day 3
    const day3Activities = [act6.id, act7.id];
    const d3 = new Day({
      accommodation: 'Hofn Glacier Inn',
      activities: day3Activities
    });
    days.push(d3);

    // Day 4
    const day4Activities = [act8.id, act9.id];
    const d4 = new Day({
      accommodation: 'Akureyri Guesthouse',
      activities: day4Activities
    });
    days.push(d4);

    // Day 5
    const day5Activities = [act10.id];
    const d5 = new Day({
      accommodation: 'CenterHotel Midgardur',
      activities: day5Activities
    });
    days.push(d5);

    // Day 6
    const day6Activities = [act11.id, act12.id];
    const d6 = new Day({
      accommodation: 'Hotel Borg',
      activities: day6Activities
    });
    days.push(d6);

    // Day 7
    const day7Activities = [act13.id, act14.id, act15.id];
    const d7 = new Day({
      accommodation: 'Hofn Glacier Inn',
      activities: day7Activities
    });
    days.push(d7);

    // Day 8
    const day8Activities = [act16.id, act17.id];
    const d8 = new Day({
      accommodation: 'Fosshotel Vatnajokull',
      activities: day8Activities
    });
    days.push(d8);

    // Day 9
    const day9Activities = [act18.id, act19.id];
    const d9 = new Day({
      accommodation: 'Akureyri Guesthouse',
      activities: day9Activities
    });
    days.push(d9);

    // Day 10
    const day10Activities = [act20.id];
    const d10 = new Day({
      accommodation: 'Reykjavik Marina Residence',
      activities: day10Activities
    });
    days.push(d10);

    // Day 11
    const day11Activities = [act21.id, act22.id];
    const d11 = new Day({
      accommodation: 'Hotel Glymur',
      activities: day11Activities
    });
    days.push(d11);

    // Day 12
    const day12Activities = [act23.id, act24.id, act25.id];
    const d12 = new Day({
      accommodation: 'Canopy by Hilton Reykjavik City Centre',
      activities: day12Activities
    });
    days.push(d12);

    // Day 13
    const day13Activities = [act26.id, act27.id];
    const d13 = new Day({
      accommodation: 'Fosshotel Reykjavik',
      activities: day13Activities
    });
    days.push(d13);

    // Day 14
    const day14Activities = [act28.id, act29.id, act30.id];
    const d14 = new Day({
      accommodation: 'Hotel Skogafoss',
      activities: day14Activities
    });
    days.push(d14);

    // Day 15
    const day15Activities = [act31.id, act32.id];
    const d15 = new Day({
      accommodation: 'Husavik Cape Hotel',
      activities: day15Activities
    });
    days.push(d15);

    // Day 16
    const day16Activities = [act33.id, act34.id];
    const d16 = new Day({
      accommodation: 'CenterHotel Thingholt',
      activities: day16Activities
    });
    days.push(d16);

    // Day 17
    const day17Activities = [act35.id, act36.id];
    const d17 = new Day({
      accommodation: 'Fosshotel Eastfjords',
      activities: day17Activities
    });
    days.push(d17);

    // Day 18
    
    const d18 = new Day({
      accommodation: 'Icelandair Hotel Vik'
    });
    days.push(d18);

    // Day 19
    const day19Activities = [act37.id];
    const d19 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day19Activities
    });
    days.push(d19);

    // Day 20
    const day20Activities = [act38.id, act39.id];
    const d20 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day20Activities
    });
    days.push(d20);

    // Day 21
    const day21Activities = [act40.id, act41.id, act42.id];
    const d21 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day21Activities
    });
    days.push(d21);

    // Day 22
    const day22Activities = [act43.id, act44.id];
    const d22 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day22Activities
    });
    days.push(d22);

    // Day 23
    const day23Activities = [act45.id, act46.id];
    const d23 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day23Activities
    });
    days.push(d23);

    // Day 24
    const day24Activities = [act47.id, act48.id];
    const d24 = new Day({
      accommodation: 'Alicante Beachfront Hotel',
      activities: day24Activities
    });
    days.push(d24);

    // Day 25
    const day25Activities = [act49.id, act50.id, act51.id];
    const d25 = new Day({
      accommodation: 'Alicante Beachfront Hotel',
      activities: day25Activities
    });
    days.push(d25);

    // Day 26
    const day26Activities = [act52.id, act53.id, act54.id];
    const d26 = new Day({
      accommodation: 'Alicante Beachfront Hotel',
      activities: day26Activities
    });
    days.push(d26);

    // Day 27
    const day27Activities = [act55.id, act56.id, act57.id];
    const d27 = new Day({
      accommodation: 'Bulgari Hotel London',
      activities: day27Activities
    });
    days.push(d27);

    // Day 28
    const day28Activities = [act58.id, act59.id];
    const d28 = new Day({
      accommodation: 'Bulgari Hotel London',
      activities: day28Activities
    });
    days.push(d28);

    // Day 29
    const day29Activities = [act60.id, act61.id];
    const d29 = new Day({
      accommodation: 'Bulgari Hotel London',
      activities: day29Activities
    });
    days.push(d29);

    // Day 30
    const day30Activities = [act62.id, act63.id, act64.id];
    const d30 = new Day({
      accommodation: 'Bulgari Hotel London',
      activities: day30Activities
    });
    days.push(d30);




    const createdDays = await Day.insertMany(days);

    const itineraries = [];

    // Itinerary 1: Iceland: Nature's Wonders (5 days)
    const itinerary1Days = [d1.id, d2.id, d3.id, d4.id, d5.id];
    const it1 = new Itinerary({
      title: "Exploring the Land of Fire and Ice",
      locationName: 'Iceland',
      locationType: 'Country',
      countryCode: 'IS',
      lng: -19.02,
      lat: 64.96,
      length: 5,
      fakeLikes: 106,
      fakeViews: 1240,
      author: u2.id,
      days: itinerary1Days
    });
    itineraries.push(it1);

    // Itinerary 2: Iceland Adventure (6 days)
    const itinerary2Days = [d6.id, d7.id, d8.id, d9.id, d10.id, d11.id];
    const it2 = new Itinerary({
      title: 'Icelandic Wonders: From Reykjavik to the Glaciers',
      locationName: 'Iceland',
      locationType: 'Country',
      countryCode: 'IS',
      lng: -19.02,
      lat: 64.96,
      length: 6,
      fakeLikes: 95,
      fakeViews: 862,
      author: u3.id,
      days: itinerary2Days
    });
    itineraries.push(it2);

    // Itinerary 3: Iceland Explorer (7 days)
    const itinerary3Days = [d12.id, d13.id, d14.id, d15.id, d16.id, d17.id, d18.id];
    const it3 = new Itinerary({
      title: 'Northern Lights Quest: Chasing Aurora Borealis in Iceland',
      locationName: 'Iceland',
      locationType: 'Country',
      countryCode: 'IS',
      lng: -19.02,
      lat: 64.96,
      length: 7,
      fakeLikes: 25,
      fakeViews: 451,
      author: u4.id,
      days: itinerary3Days
    });
    itineraries.push(it3);

    const itinerary4Days = [d19.id, d20.id, d21.id, d22.id, d23.id];
    const it4 = new Itinerary({
      title: 'Sushi and Sake tour',
      locationName: 'Tokyo',
      locationType: 'City',
      countryCode: 'JP',
      lng: 139.83,
      lat: 35.65,
      length: 5,
      fakeLikes: 497,
      fakeViews: 1305,
      author: u4.id,
      days: itinerary4Days
    });
    itineraries.push(it4);

    const itinerary5Days = [d24.id, d25.id, d26.id];
    const it5 = new Itinerary({
      title: 'Alicante Beach Vacation',
      locationName: 'Alicante',
      locationType: 'City',
      countryCode: 'ES',
      lng: -0.4813, 
      lat: 38.3452,
      length: 3,
      fakeLikes: 49, 
      fakeViews: 130, 
      author: u2.id, 
      days: itinerary5Days
    });
    itineraries.push(it5);

    const itineraryLondonDays = [d27.id, d28.id, d29.id, d30.id];
    const itinerary6 = new Itinerary({
      title: 'Exploring London: A 4-Day Adventure',
      locationName: 'London',
      locationType: 'City',
      countryCode: 'GB',
      lng: -0.1276,
      lat: 51.5072,
      length: 4,
      fakeLikes: 497, 
      fakeViews: 1305, 
      author: u4.id,
      days: itineraryLondonDays
    });
    itineraries.push(itinerary6);




    const createdItineraries = await Itinerary.insertMany(itineraries);





    console.log("Done!");
  } catch (err) {
    console.error(err.stack);
  }
};
