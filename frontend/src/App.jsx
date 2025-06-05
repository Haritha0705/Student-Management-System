import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import AddStudent from "./Components/AddStudent.jsx";
import AllStudents from "./Components/AllStudents.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/add" element={<AddStudent />} />
                <Route path="/" element={<AllStudents />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
