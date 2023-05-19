import React from "react";
import { Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees';
import Home from './pages/Home';


export default function DisplayRecord() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
      </Routes>
    </div>
  );
}
