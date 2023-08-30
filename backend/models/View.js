const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const viewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  itinerary: { type: Schema.Types.ObjectId, ref: 'Itinerary', required: true }
}, { timestamps: true });

module.exports = mongoose.model('View', viewSchema);
