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
        formatted_phone_number:{
            type: String
        },
        rating:{
            type: String
        },
        user_ratings_total:{
            type: Number
        },
        place_id: { type: String, required: true},
        imageUrl: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Activity', activitySchema);

