import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../assets/styles/Filter.scss";

const Filter: React.FC<{ heading: string; data: string[] }> = ({
  heading,
  data,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleCheckboxChange(index: number) {}

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={`filter ${isCollapsed ? 'collapsed' : ''}`}>
      <h2 onClick={handleToggleCollapse}>
        {heading}
        {!isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
      </h2>
      {!isCollapsed && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`item-${index}`}
                onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor={`item-${index}`}>{item}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
