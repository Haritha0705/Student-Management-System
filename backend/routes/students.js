const router = require("express").Router();
const Student = require("../models/student");

// Add a new student
router.route("/add").post((req, res) => {
    const { name, grade, gender } = req.body;

    const newStudent = new Student({
        name,
        grade,
        gender,
    });

    newStudent.save()
        .then(() => res.status(201).json("Student added successfully"))
        .catch((err) => res.status(500).json({ error: err.message }));
});

// Get all students
router.route("/").get((req, res) => {
    Student.find()
        .then((students) => res.status(200).json(students))
        .catch((err) => res.status(500).json({ error: err.message }));
});

// Update student by ID
router.route("/update/:id").put(async (req, res) => {
    const studentId = req.params.id;
    const { name, grade, gender } = req.body;

    try {
        await Student.findByIdAndUpdate(studentId, {
            name,
            grade,
            gender

        });
        res.status(200).json({ status: "Student updated successfully" });
    } catch (err) {
        res.status(500).json({ status: "Error updating student", error: err.message });
    }
});

// Delete student by ID
router.route("/delete/:id").delete(async (req, res) => {
    const studentId = req.params.id;

    try {
        await Student.findByIdAndDelete(studentId);
        res.status(200).json({ status: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ status: "Error deleting student", error: err.message });
    }
});

// Get a single student by ID
router.route("/get/:id").get(async (req, res) => {
    const studentId = req.params.id;

    try {
        const student = await Student.findById(studentId);
        if (student) {
            res.status(200).json({ status: "Student fetched successfully", student });
        } else {
            res.status(404).json({ status: "Student not found" });
        }
    } catch (err) {
        res.status(500).json({ status: "Error fetching student", error: err.message });
    }
});

module.exports = router;
