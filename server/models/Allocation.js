const mongoose = require('mongoose');

const AllocationSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    dormitoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dormitory', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }
});

module.exports = mongoose.model('Allocation', AllocationSchema);
