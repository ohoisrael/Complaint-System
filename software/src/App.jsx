import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import StudentsSide from "./Components/StudentsSide";
import LecturerSide from "./Components/LecturerSide";
import Login from "./Components/Login";
import Complaints from "./Components/Complaints";
import EditComplaint from "./Components/EditComplaint";
import SurveyForm from "./Components/surv";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add_complaint" element={<StudentsSide />} />
          <Route path="/edit_complaint/:id" element={<EditComplaint />} />
          <Route path="/lecturer" element={<LecturerSide />} />
          <Route path="/resultissue" element={<Complaints />} />
          <Route path="/surv" element={<SurveyForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
