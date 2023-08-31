const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema(
    {
        accommodation: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Day', daySchema);
