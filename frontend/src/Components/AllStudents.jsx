import React, { useState, useEffect } from 'react';
import axios from "axios";

function AllStudents() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8070/student")
            .then((res) => {
                setStudents(res.data);
                console.log(res)
            })
            .catch((err) => {
                alert("Error: " + err.message);
            });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">All Students</h1>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">#</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Registration No</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student, index) => (
                        <tr key={index} className="text-center hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.age}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.gender}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllStudents;
