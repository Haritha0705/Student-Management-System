import React, { useEffect, useState } from 'react';
import {
    Search,
    Settings,
    ChevronRight,
    GraduationCap,
} from 'lucide-react';
import PopUp from './PopUp.jsx';
import axios from 'axios';

export function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8070/student')
            .then((res) => {
                setStudents(res.data);
            })
            .catch((err) => {
                alert('Error: ' + err.message);
            });
    }, []);

    // ✅ Grouping students by grade
    const gradeGroups = {
        '1-5': 0,
        '6-9': 0,
        '10-11': 0,
        '12-13': 0,
    };

    students.forEach(student => {
        const grade = parseInt(student.grade);
        if (grade >= 1 && grade <= 5) gradeGroups['1-5']++;
        else if (grade >= 6 && grade <= 9) gradeGroups['6-9']++;
        else if (grade >= 10 && grade <= 11) gradeGroups['10-11']++;
        else if (grade >= 12 && grade <= 13) gradeGroups['12-13']++;
    });

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <header className="bg-green-800 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <GraduationCap className="mr-2" size={24} />
                    <h1 className="text-xl font-bold">Riverstone Academy</h1>
                    <span className="mx-2">•</span>
                    <span className="text-sm">Student Management System</span>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="p-2 rounded-full hover:bg-green-700">
                        <Settings size={20} />
                    </button>
                </div>
            </header>

            <main className="container mx-auto p-6 bg-white mt-4 rounded-lg shadow-sm">
                {/* 📊 Statistics Row */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                    <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-600">Total Students</div>
                        <div className="flex items-center">
                            <GraduationCap className="text-green-800 mr-2" size={20} />
                            <span className="text-3xl font-bold text-gray-800">{students.length}</span>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-600">Grades 1–5</div>
                        <div className="text-3xl font-bold text-gray-800">
                            {gradeGroups['1-5']}
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-600">Grades 6–9</div>
                        <div className="text-3xl font-bold text-gray-800">
                            {gradeGroups['6-9']}
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-600">Grades 10–11</div>
                        <div className="text-3xl font-bold text-gray-800">
                            {gradeGroups['10-11']}
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-600">Grades 12–13</div>
                        <div className="text-3xl font-bold text-gray-800">
                            {gradeGroups['12-13']}
                        </div>
                    </div>
                </div>

                {/* 🔍 Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                        <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Search student by ID or Name"
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex space-x-2">
                        <PopUp />
                    </div>
                </div>

                {/* 🧑‍🎓 Students Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                        <tr className="border-b">
                            <th className="text-left px-4 py-2">ID</th>
                            <th className="text-left px-4 py-2">Name</th>
                            <th className="text-left px-4 py-2">Grade</th>
                            <th className="text-left px-4 py-2">Gender</th>
                            <th className="text-left px-4 py-2">Age</th>
                            <th className="text-left px-4 py-2">Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students
                            .filter((student) =>
                                student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                student.id?.toString().includes(searchTerm)
                            )
                            .map((student, index) => (
                                <tr key={student.id || index} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3 flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                                            <img
                                                src={`https://i.pravatar.cc/150?u=${index + 1}`}
                                                alt={student.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {student.name}
                                    </td>
                                    <td className="px-4 py-3">{student.grade}</td>
                                    <td className="px-4 py-3">{student.gender}</td>
                                    <td className="px-4 py-3">{student.age}</td>
                                    <td className="px-4 py-3">{student.address}</td>
                                    <td className="px-4 py-3">
                                        <button className="text-green-800 flex items-center">
                                            View <ChevronRight size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
