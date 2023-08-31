const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activityDaySchema = new Schema(
    {
        day: { type: Schema.Types.ObjectId, ref: 'Day', required: true },
        activity: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('ActivityDay', activityDaySchema);
