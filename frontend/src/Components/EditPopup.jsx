// EditPopup.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function EditPopup({ isOpen, onClose, student, onFormSubmit }) {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [gender, setGender] = useState("");

    useEffect(() => {
        if (student) {
            setName(student.name || "");
            setGrade(student.grade || "");
            setGender(student.gender || "");
        }
    }, [student]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedStudent = { name, grade, gender };

        axios
            .put(`http://localhost:8070/student/update/${student._id}`, updatedStudent)
            .then(() => {
                alert("Student updated successfully");
                onFormSubmit();
            })
            .catch((err) => {
                alert("Error updating student: " + err.message);
            });
    };

    if (!isOpen || !student) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 z-10 text-center animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
                    title="Close">✕
                </button>

                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Edit Student</h1>

                <form onSubmit={handleUpdate} className="text-left space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Grade</label>
                        <input
                            type="number"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Gender</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                            Update Student
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPopup;
