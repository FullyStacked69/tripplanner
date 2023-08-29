const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerarySchema = new Schema(
  {
    title: {
        type: String,
        required: false
    },
    length: {
        type: Number,
        required: true
    },
    locationType: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    locationName: {
        type: String,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    partOf: {type: Schema.Types.ObjectId, ref: 'Itinerary', required: false},
    }, { timestamps: true }
);

module.exports = mongoose.model('Itinerary', itinerarySchema);