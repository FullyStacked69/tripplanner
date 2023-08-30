const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    title: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    partOf: {type: Schema.Types.ObjectId, ref: 'Itinerary', required: true}
    }, { timestamps: true }
);

module.exports = mongoose.model('Activity', activitySchema);