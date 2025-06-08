import React, { useState } from "react";
import axios from "axios";

function AddPopup({ isOpen, onClose, onFormSubmit }) {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { name, grade, gender };

        axios
            .post("http://localhost:8070/student/add/", newStudent)
            .then(() => {
                alert("Student Added Successfully");
                setName("");
                setGrade("");
                setGender("");
                onFormSubmit();
            })
            .catch((err) => {
                alert("Error: " + err.message);
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" />
            <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 z-10 text-center animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
                    title="Close">✕
                </button>

                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Add Student</h1>

                <form onSubmit={handleSubmit} className="text-left space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="grade">
                            Grade
                        </label>
                        <input
                            id="grade"
                            type="number"
                            placeholder="Enter grade"
                            required
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="gender">
                            Gender
                        </label>
                        <select
                            id="gender"
                            required
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition">Add Student
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPopup;
