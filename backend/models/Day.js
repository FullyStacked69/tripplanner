const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema(
    {
        activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Day', daySchema);
