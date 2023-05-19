import Employees from "../Data.json";
import React from "react";
import Card from "../components/Card";
const Features = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        {Employees.map((employee) => {
          return (
            <Card
              key={employee.id}
              name={employee.name}
              designation={employee.designation}
              skills={employee.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
