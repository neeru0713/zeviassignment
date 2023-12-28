// src/components/LandingPage.tsx
import React from 'react';
import '../assets/styles/SearchBar.scss';
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
     <input type="text" name="input" placeholder='Search'/>
     <CiSearch id="search-icon"/>
    </div>
  );
};

export default SearchBar;
