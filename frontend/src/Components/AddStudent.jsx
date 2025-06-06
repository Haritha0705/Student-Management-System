import React, { useState } from 'react';
import axios from "axios";

function AddStudent() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    function sentData(e) {
        e.preventDefault();
        const newStudent= {
            name,
            age,
            gender
        }

        axios.post("http://localhost:8070/student/add/",newStudent).then(()=>{
            alert("Student Add")
            setName("");
            setAge("");
            setGender("");
        }).catch((err)=>{
            alert(err)
        })
    }


    return (
        <div className="w-full max-w-xs mx-auto mt-10">
            <form onSubmit={sentData} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Student Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter Student Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                        Student Age
                    </label>
                    <input
                        id="age"
                        type="text"
                        placeholder="Enter Student Age"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                        Student Gender
                    </label>
                    <input
                        id="gender"
                        type="text"
                        placeholder="Enter Student Gender"
                        required
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddStudent;
