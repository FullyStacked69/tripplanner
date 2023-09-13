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
        locationName: {
            type: String,
            required: true,
        },
        fakeLikes: {
            type: Number,
        },

        fakeViews: {
            type: Boolean,
        },

        startDate: {
            type: Date, 
            required: true,
        },
        lng: {
            type: Number
        },
        lat: {
            type: Number
        },
        author: { type: Schema.Types.ObjectId, ref: 'User', required: true },

        days: [{type: Schema.Types.ObjectId, ref: 'Day'}],

        likes: [{ type: Schema.Types.ObjectId, ref: 'Like' }]

    },
    { timestamps: true }
);

module.exports = mongoose.model('Itinerary', itinerarySchema);
