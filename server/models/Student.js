const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    contact: { type: String, required: true }
});

module.exports = mongoose.model('Student', StudentSchema);
