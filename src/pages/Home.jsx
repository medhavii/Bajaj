import React from "react";
import { Link } from "react-router-dom";
// import machine from '../assets/machine.png'
const Home = () => {
  return (
    <div className="flex flex-col justify-center bg-purple-300 text-pink-700 font-semibold ">
      <div className="flex flex-col justify-center ">
        <p className="justify-center">Bajaj Health Frontend Challenge (Qualifier 1)</p>
        <p>(19th May 2023)</p>
        <p>
          <span>Objective: </span>To render data from JSON with appealing UI
        </p>
        <Link to="/employees" className="rounded w-80 bg-yellow-400 p-2 m-2">
              Employees
            </Link>
      </div>
    </div>
  );
};

export default Home;
