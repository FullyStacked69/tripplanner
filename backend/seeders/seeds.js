const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');

const User = require('../models/User');
const Itinerary = require('../models/Itinerary');
const bcrypt = require('bcryptjs');

const users = []

const u1 = new User({
    username:'seed1',
    email:'seed1@seed.com',
    hashedPassword: bcrypt.hashSync('password', 10)
})

users.push(u1)

const itineraries = [];

const i1 = new Itinerary({
    title:'Iceland',
    length: 5,
    lng:-19.02,
    lat: 64.96,
    author: u1._id
})

const i2 = new Itinerary({
    title:'Paris',
    length: 3,
    lng: 2.35,
    lat: 48.85,
    author: u1._id
})

itineraries.push(i1, i2)

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
console.log("Resetting db and seeding users and itineraries...");

User.collection.drop()
                .then(() => Itinerary.collection.drop())
                .then(() => User.insertMany(users))
                .then(() => Itinerary.insertMany(itineraries))
                .then(() => {
                    console.log("Done!");
                    mongoose.disconnect();
                })
                .catch(err => {
                    console.error(err.stack);
                    process.exit(1);
                });
  }