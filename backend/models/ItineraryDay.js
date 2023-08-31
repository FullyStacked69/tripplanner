const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itineraryDaySchema = new Schema(
    {
        day: { type: Schema.Types.ObjectId, ref: 'Day', required: true },
        itinerary: { type: Schema.Types.ObjectId, ref: 'Itinerary', required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('ItineraryDay', itineraryDaySchema);
