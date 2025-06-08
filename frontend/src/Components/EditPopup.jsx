import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPopup = ({ isOpen, onClose, student, onFormSubmit }) => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8070/student/update/${student._id}`, {
                name,
                grade,
                gender,
            });
            onFormSubmit();
            onClose();
        } catch (err) {
            alert("Failed to update student!");
        }
    };

    if (!isOpen || !student) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <div className="relative bg-white rounded-xl shadow-md w-[90%] max-w-md p-6 z-10">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8"
                >
                    ✕
                </button>
                <h2 className="text-xl font-semibold mb-4">Edit Student</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <select
                        className="w-full border px-3 py-2 rounded"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                    >
                        <option value="">Select Grade</option>
                        {[...Array(13)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <select
                        className="w-full border px-3 py-2 rounded"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Update Student</button>
                </form>
            </div>
        </div>
    );
}

export default EditPopup;
