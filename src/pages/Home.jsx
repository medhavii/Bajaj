import React from "react";
import { Link } from "react-router-dom";
// import machine from '../assets/machine.png'
const Home = () => {
  return (
    <div className="flex flex-col justify-center mt-40 ">
      <div className="flex justify-center">  
      <div className="flex flex-col justify-center ">
        <p className="justify-center font-bold">Bajaj Health Frontend Challenge (Qualifier 2)</p>
        <p>(21st May 2023)</p>
        <p className="font-semibold">
          <span>Objective: </span>To render data basis filter and make it searchable
        </p>
        <br/>
        <br />
        <Link to="/employees" className="rounded w-40 bg-yellow-400 p-2 m-2 ml-20">
              Employees
            </Link>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
