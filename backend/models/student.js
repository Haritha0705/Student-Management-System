const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    grade: { type: Number, required: true },
    gender: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
