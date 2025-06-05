// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen pt-[4.5rem] pb-[3.5rem] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
