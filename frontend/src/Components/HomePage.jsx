import React, { useState } from 'react'
import {
    Search,
    Settings,
    User,
    ChevronRight,
    SlidersHorizontal,
    GraduationCap,
    ArrowLeft,
    ArrowRight,
} from 'lucide-react'
export function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    // Mock student data
    const students = [
        {
            id: 1,
            name: 'Tommy Smith',
            regNum: 'A123BC',
            grade: 7,
            gender: 'Male',
            age: 12,
            ownerName: 'Oliver Thompson',
            ownerJob: 'Childcare',
            income: '£3,000',
        },
        {
            id: 2,
            name: 'Lucy Brown',
            regNum: 'B456DE',
            grade: 12,
            gender: 'Female',
            age: 17,
            ownerName: 'Emily Thompson',
            ownerJob: 'Bus Monitor',
            income: '£3,000',
        },
        {
            id: 3,
            name: 'Jake White',
            regNum: 'C789FG',
            grade: 3,
            gender: 'Male',
            age: 8,
            ownerName: 'James Smith',
            ownerJob: 'Program Coordinator',
            income: '£3,000',
        },
        {
            id: 4,
            name: 'Ella Green',
            regNum: 'D012HI',
            grade: 10,
            gender: 'Female',
            age: 15,
            ownerName: 'Charlotte Smith',
            ownerJob: 'Play Leader',
            income: '£3,000',
        },
        {
            id: 5,
            name: 'Max Jones',
            regNum: 'E345JK',
            grade: 5,
            gender: 'Male',
            age: 10,
            ownerName: 'Henry Johnson',
            ownerJob: 'Tutor',
            income: '£3,000',
        },
        {
            id: 6,
            name: 'Zoe Taylor',
            regNum: 'F678LM',
            grade: 9,
            gender: 'Female',
            age: 14,
            ownerName: 'Amelia Johnson',
            ownerJob: 'Support Worker',
            income: '£3,000',
        },
        {
            id: 7,
            name: 'Leo Clark',
            regNum: 'G901NO',
            grade: 1,
            gender: 'Male',
            age: 5,
            ownerName: 'George Brown',
            ownerJob: 'Activities Organizer',
            income: '£3,000',
        },
        {
            id: 8,
            name: 'Mia Adams',
            regNum: 'H234PQ',
            grade: 8,
            gender: 'Female',
            age: 13,
            ownerName: 'Isabella Brown',
            ownerJob: 'Workshop Facilitator',
            income: '£3,000',
        },
    ]
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
                {/* Statistics Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

                    <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-600">Total Students</div>
                        <div className="flex items-center">
                            <GraduationCap className="text-green-800 mr-2" size={20} />
                            <span className="text-3xl font-bold text-gray-800">1375</span>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-600">Primary Students</div>
                        <div className="flex items-center">
              <span className="text-xs bg-gray-200 px-2 py-1 rounded mr-2">
                1-5
              </span>
                            <span className="text-3xl font-bold text-gray-800">520</span>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-600">Middle Students</div>
                        <div className="flex items-center">
              <span className="text-xs bg-gray-200 px-2 py-1 rounded mr-2">
                6-9
              </span>
                            <span className="text-3xl font-bold text-gray-800">430</span>
                        </div>
                    </div>
                </div>
                {/* Search and Filters */}
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
                        <button className="flex items-center bg-green-800 text-white rounded-md px-4 py-2">
                            <span className="mr-2">Add Student</span>
                            <span className="text-xl">+</span>
                        </button>
                    </div>
                </div>
                {/* Students Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                        <tr className="border-b">
                            <th className="w-10 px-4 py-2"></th>
                            <th className="text-left px-4 py-2">Full Name</th>
                            <th className="text-left px-4 py-2">Grade</th>
                            <th className="text-left px-4 py-2">Gender</th>
                            <th className="text-left px-4 py-2">Age</th>

                        </tr>
                        </thead>
                        <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3">
                                    <input type="checkbox" className="rounded" />
                                </td>
                                <td className="px-4 py-3 flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                                        <img
                                            src={`https://i.pravatar.cc/150?u=${student.id}`}
                                            alt={student.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {student.name}
                                </td>
                                <td className="px-4 py-3">{student.regNum}</td>
                                <td className="px-4 py-3">{student.grade}</td>
                                <td className="px-4 py-3">{student.gender}</td>
                                <td className="px-4 py-3">{student.age}</td>
                                <td className="px-4 py-3">{student.ownerName}</td>
                                <td className="px-4 py-3">{student.ownerJob}</td>
                                <td className="px-4 py-3">{student.income}</td>
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
                {/* Pagination */}
                <div className="flex justify-between items-center mt-6">
                    <button className="flex items-center text-gray-600 px-4 py-2 rounded">
                        <ArrowLeft size={16} className="mr-1" /> Previous
                    </button>
                    <div className="flex space-x-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-green-800 text-white">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
                            3
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center">
              ...
            </span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
                            8
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
                            9
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
                            10
                        </button>
                    </div>
                    <button className="flex items-center text-gray-600 px-4 py-2 rounded">
                        Next <ArrowRight size={16} className="ml-1" />
                    </button>
                </div>
            </main>
        </div>
    )
}
export default HomePage;