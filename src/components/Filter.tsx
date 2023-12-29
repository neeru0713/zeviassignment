import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import StarRating from "./StarRating"; // Assuming you have a StarRating component
import "../assets/styles/Filter.scss";

interface FilterProps {
  heading: string;
  data: string[];
  onFilterChange: (filters: string[], heading: string) => void;
}

const Filter: React.FC<FilterProps> = ({ heading, data, onFilterChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  useEffect(() => {
    onFilterChange(selectedCheckboxes, heading);
  }, [selectedCheckboxes]);

  const handleCheckboxChange = (item: string) => {
    setSelectedCheckboxes((prev) =>
      prev.includes(item) ? prev.filter((prevItem) => prevItem !== item) : [...prev, item]
    );
  };

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const renderCheckboxes = () => {
    if (heading === "RATING") {
      return (
        <>
          {[1, 2, 3, 4, 5].map((rating) => (
            <li key={rating}>
              <input
                type="checkbox"
                id={`rating-${rating}`}
                checked={selectedCheckboxes.includes(`${rating}`)}
                onChange={() => handleCheckboxChange(`${rating}`)}
              />
              <label htmlFor={`rating-${rating}`}>
                <StarRating rating={rating} />
              </label>
            </li>
          ))}
        </>
      );
    } else {
      return (
        <>
          {data.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`item-${index}`}
                checked={selectedCheckboxes.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              <label htmlFor={`item-${index}`}>{item}</label>
            </li>
          ))}
        </>
      );
    }
  };

  return (
    <div className={`filter ${isCollapsed ? "collapsed" : ""}`}>
      <h2 onClick={handleToggleCollapse}>
        {heading}
        {!isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
      </h2>
      {!isCollapsed && <ul>{renderCheckboxes()}</ul>}
    </div>
  );
};

export default Filter;
