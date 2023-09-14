const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema(
   
    {
        name: {
            type: String,
            required: true,
        },
        formatted_address: {
            type: String,
        },
        formatted_phone_number: {
            type: String
        },
        rating: {
            type: Number
        },
        user_ratings_total: {
            type: Number
        },
        lng: {
            type: Number,
            required: true,
        },
        lat: {
            type: Number,
            required: true,
        },
        place_id: { type: String },
        imageUrl: { type: String },
        comment: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Activity', activitySchema);

