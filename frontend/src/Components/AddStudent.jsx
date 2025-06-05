import React, {useState} from 'react';

function AddStudent() {

    const [name,setname] = useState("")
    const [age,setage] = useState("")
    const [gender,setgender] = useState("")


    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Student Name</label>
                    <input onChange={(e)=>{
                        setname(e.target.value)
                    }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Student Name"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Student Age</label>
                    <input onChange={(e)=>{
                        setage(e.target.value)
                    }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="Enter Student Age"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Student Gender</label>
                    <input onChange={(e)=>{
                        setgender(e.target.value)
                    }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text" placeholder="Enter Student Gender"/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddStudent;