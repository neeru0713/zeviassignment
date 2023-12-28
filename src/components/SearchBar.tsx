import React, { useState } from "react";
import "../assets/styles/SearchBar.scss";
import { CiSearch } from "react-icons/ci";
import Popover from "./Popover";

const SearchBar: React.FC<{ className: string }> = ({ className }) => {
  const [showPopover, setShowPopover] = useState(false);

  const openPopover = () => {
    setShowPopover(true);
  };

  return (
    <>
      <div className={`search-bar ${className}`} onClick={openPopover}>
        <input type="text" name="input" placeholder="Search" />
        <CiSearch id="search-icon" />
      </div>

      <Popover open={showPopover} />
    </>
  );
};

export default SearchBar;
