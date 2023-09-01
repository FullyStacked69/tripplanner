const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema(
    {
        accommodation: {
            type: String,
            required: true,
        },
        activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }], 
    },
    { timestamps: true }
);

module.exports = mongoose.model('Day', daySchema);
