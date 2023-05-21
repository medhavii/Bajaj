import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Employees from "../Data.json";

const Filter = () => {
  const [isActive, setIsActive] = useState(false);
  const [filterTags, setFilterTags] = useState([]);
  const [filterSkills, setFilterSkills] = useState([]);

  const filteredDATA = Employees.filter((node) =>
    filterTags.length > 0
      ? filterTags.every((filterTag) =>
          node.tags.map((tag) => tag.slug).includes(filterTag)
        )
      : Employees
  );

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };

  const handleFilterSkills = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterSkills((prevSkills) => [...prevSkills, value]);
    } else {
      setFilterSkills((prevSkills) =>
        prevSkills.filter((skill) => skill !== value)
      );
    }
  };

  

  return (
    <div className="relative flex ">
      <div className="m-2 p-2 " onClick={(e) => setIsActive(!isActive)}>
        All
      </div>
      {isActive && (
        <div className=" absolute flex flex-col py-2 mt-12 w-full rounded bg-yellow-300 text-slate-700 ">
          <label className="m-2" htmlFor="SQL">
            <input
              type="checkbox"
             onChange={handleFilterSkills}
              value="SQL"
              id="SQL"
            />
            <span className="ml-2">SQL</span>
          </label>
          <label className="m-2" htmlFor="Javascript">
            <input
              type="checkbox"
                onChange={handleFilterSkills}
              value="Javascript"
              id="Javascript"
            />
            <span className="ml-2">Javascript</span>
          </label>
          <label className="m-2" htmlFor="Python">
            <input
              type="checkbox"
                onChange={handleFilterSkills}
              value="Python"
              id="Python"
            />
            <span className="ml-2">Python</span>
          </label>
          <label className="m-2" htmlFor="HTML">
            <input
              type="checkbox"
                onChange={handleFilterSkills}
              value="HTML"
              id="HTML"
            />
            <span className="ml-2">HTML</span>
          </label>
          <label className="m-2" htmlFor="CSS">
            <input
              type="checkbox"
                onChange={handleFilterSkills}
              value="CSS"
              id="CSS"
            />
            <span className="ml-2">CSS</span>
          </label>
          <label className="m-2" htmlFor="Photoshop">
            <input
              type="checkbox"
                onChange={handleFilterSkills}
              value="Photoshop"
              id="Photoshop"
            />
            <span className="ml-2">Photoshop</span>
          </label>
          <label className="m-2" htmlFor="Manual Testing">
            <input
              type="checkbox"
                onChange={handleFilterSkills}
              value="Manual Testing"
              id="Manual Testing"
            />
            <span className="ml-2">Manual Testing</span>
          </label>
          <label className="m-2" htmlFor="Java">
            <input
              type="checkbox"
                onChange={handleFilterSkills}
              value="Java"
              id="Java"
            />
            <span className="ml-2">Java</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default Filter;
