import React, { useState } from "react";
import axios from "axios";

function Popup({ isOpen, onClose, onFormSubmit }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { name, age, grade, address, gender };

        axios.post("http://localhost:8070/student/add/", newStudent)
            .then(() => {
                alert("Student Added Successfully");
                setName("");
                setAge("");
                setAddress("");
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
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"></div>

            <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 z-10 text-center animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
                    title="Close"
                >
                    ✕
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
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="age">
                            Age
                        </label>
                        <input
                            id="age"
                            type="number"
                            placeholder="Enter age"
                            required
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="grade">
                            Grade
                        </label>
                        <select
                            id="grade"
                            required
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select Grade</option>
                            {[...Array(12)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="address">
                            Address
                        </label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Enter address"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

function PopUpAddStudent() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div>
            <button onClick={openPopup} className="flex items-center bg-green-800 text-white rounded-md px-4 py-2">
                <span className="mr-2">Add Student</span>
                <span className="text-xl">+</span>
            </button>
            <Popup isOpen={isPopupOpen} onClose={closePopup} onFormSubmit={closePopup} />
        </div>
    );
}

export default PopUpAddStudent;
