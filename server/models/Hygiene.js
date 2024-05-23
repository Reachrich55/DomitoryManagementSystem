const mongoose = require('mongoose');

const HygieneSchema = new mongoose.Schema({
    dormitoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dormitory', required: true },
    inspectionDate: { type: Date, required: true },
    score: { type: Number, required: true },
    comments: { type: String }
});

module.exports = mongoose.model('Hygiene', HygieneSchema);
