const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerarySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        locationType: {
            type: String,
            required: true,
        },
        countryCode: {
            type: String,
            required: true,
        },
        locationName: {
            type: String,
            required: true,
        },
        lng: {
            type: Number,
            required: true,
        },
        lat: {
            type: Number,
            required: true,
        },
        fakeLikes: {
            type: Number,
        },
        fakeViews: {
            type: Number,
        },

        startDate: {
            type: Date, 
            required: true,
        },
        author: { type: Schema.Types.ObjectId, ref: 'User', required: true },

        days: [{type: Schema.Types.ObjectId, ref: 'Day'}]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Itinerary', itinerarySchema);
