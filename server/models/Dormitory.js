const mongoose = require('mongoose');

const DormitorySchema = new mongoose.Schema({
    building: { type: String, required: true },
    floor: { type: Number, required: true },
    roomNumber: { type: String, required: true },
    bedNumber: { type: Number, required: true }
});

module.exports = mongoose.model('Dormitory', DormitorySchema);
