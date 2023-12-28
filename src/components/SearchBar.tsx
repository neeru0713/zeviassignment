
import React, { useState } from 'react';
import  '../assets/styles/SearchBar.scss'; 
import { CiSearch } from 'react-icons/ci';
import Popover from './Popover';

const SearchBar: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);

  const openPopover = () => {
    setShowPopover(true);
  };

  return (
    <div className='search-bar' onClick={openPopover}>
      <input type="text" name="input" placeholder="Search" />
      <CiSearch id="search-icon" />
      <Popover open={showPopover} />
    </div>
  );
};

export default SearchBar;
