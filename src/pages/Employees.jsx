import Employees from "../Data.json";
import React from "react";
import Card from "../components/Card";
import Filter from "../components/Skills";
const Features = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="w-40 mt-8">
          Filter By Skills:
          <Filter />
        </div>
      </div>

      <div className="flex flex-wrap">
        {Employees.map((employee) => {
          return (
            <Card
              key={employee.id}
              name={employee.name}
              designation={employee.designation}
              skills={employee.skills.join(",")}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
