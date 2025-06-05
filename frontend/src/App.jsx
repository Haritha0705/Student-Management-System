import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import AddStudent from "./Components/AddStudent.jsx";
import HomePage from "./Components/HomePage.jsx"; // make sure this is imported if not already

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/addstudent" element={<AddStudent />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
