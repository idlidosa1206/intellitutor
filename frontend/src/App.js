import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.js";
import Footer from "./Components/Footer.js";
import Chat from "./pages/Chat.js";
import Profile from "./pages/Profile.js";
import LearningPath from "./pages/LearningPath.js";




function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learningpath" element={<LearningPath/>} />
        <Route index element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
