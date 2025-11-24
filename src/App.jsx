import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TeacherDashboard from "./pages/TeacherDashboard";
import AddStudent from "./pages/AddStudent";
import AddTest from "./pages/AddTest";
import AddMarks from "./pages/AddMarks";
import Results from "./pages/Results";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/results" element={<Results />} />

        <Route path="/add-marks" element={<AddMarks />} />
        <Route path="/add-test" element={<AddTest />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

