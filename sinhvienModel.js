const mongoose = require('mongoose');//import thu vien
const sinhvienSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});
const sinhvien = mongoose.model('students', sinhvienSchema);
module.exports = sinhvien;