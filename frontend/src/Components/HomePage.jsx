import React, { useEffect, useState } from "react";
import { Search, Delete, Edit, GraduationCap,User2 } from "lucide-react";
import AddPopup from "./AddPopup.jsx";
import EditPopup from "./EditPopup.jsx";
import axios from "axios";

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const fetchStudents = () => {
        axios
            .get("http://localhost:8070/student")
            .then((res) => setStudents(res.data))
            .catch((err) => alert("Error: " + err.message));
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8070/student/delete/${id}`);
            setStudents(students.filter((s) => s._id !== id));
        } catch (err) {
            alert("Delete failed: " + err.message);
        }
    };

    const handleUpdate = (studentId) => {
        const studentToEdit = students.find((s) => s._id === studentId);
        setSelectedStudent(studentToEdit);
        setIsEditPopupOpen(true);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const gradeGroups = {
        "1-5": 0,
        "6-9": 0,
        "10-11": 0,
        "12-13": 0,
    };

    students.forEach((student) => {
        const grade = parseInt(student.grade);
        if (grade >= 1 && grade <= 5) gradeGroups["1-5"]++;
        else if (grade >= 6 && grade <= 9) gradeGroups["6-9"]++;
        else if (grade >= 10 && grade <= 11) gradeGroups["10-11"]++;
        else if (grade >= 12 && grade <= 13) gradeGroups["12-13"]++;
    });

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <header className="bg-green-800 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <GraduationCap className="mr-2" size={24} />
                    <h1 className="text-xl font-bold">Student Management System</h1>
                </div>
            </header>

            <main className="container mx-auto p-6 bg-white mt-4 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                    <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-600">Total Students</div>
                        <div className="flex items-center">
                            <GraduationCap className="text-green-800 mr-2" size={20} />
                            <span className="text-3xl font-bold text-gray-800">{students.length}</span>
                        </div>
                    </div>
                    {Object.entries(gradeGroups).map(([range, count]) => (
                        <div key={range} className="p-4 bg-gray-50 rounded-md">
                            <div className="text-sm text-gray-600">Grades {range}</div>
                            <div className="text-3xl font-bold text-gray-800">{count}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18}/>
                        <input type="text" placeholder="Search student Name" className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    </div>
                    <button onClick={() => setIsPopupOpen(true)} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">+ Add Student</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                        <tr className="border-b">
                            <th className="text-left px-4 py-2">ID</th>
                            <th className="text-left px-4 py-2">Name</th>
                            <th className="text-left px-4 py-2">Grade</th>
                            <th className="text-left px-4 py-2">Gender</th>
                            <th className="text-left px-4 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students
                            .filter(
                                (student) =>
                                    student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    student._id?.toString().includes(searchTerm)
                            )
                            .map((student, index) => (
                                <tr key={student._id || index} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3 flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                                            <User2 className="w-full h-full object-cover text-green-700"/>
                                        </div>
                                        {student.name}
                                    </td>
                                    <td className="px-4 py-3">{student.grade}</td>
                                    <td className="px-4 py-3">{student.gender}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex space-x-2">
                                            <button onClick={() => handleUpdate(student._id)} className="text-green-700 hover:text-white hover:bg-green-700 border border-green-700 px-3 py-1 rounded flex items-center space-x-1 transition">
                                                <span>Edit</span>
                                                <Edit size={16} />
                                            </button>
                                            <button onClick={() => handleDelete(student._id)} className="text-red-700 hover:text-white hover:bg-red-700 border border-red-700 px-3 py-1 rounded flex items-center space-x-1 transition">
                                                <span>Delete</span>
                                                <Delete size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <AddPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onFormSubmit={fetchStudents}
            />
            <EditPopup
                isOpen={isEditPopupOpen}
                onClose={() => setIsEditPopupOpen(false)}
                student={selectedStudent}
                onFormSubmit={fetchStudents}
            />
        </div>
    );
}

export default HomePage;
