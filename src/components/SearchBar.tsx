// src/components/LandingPage.tsx
import React from 'react';
import '../assets/styles/SearchBar.scss';
import logo from "../assets/images/zevi-logo.webp"
const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
     <input type="text" name="input" placeholder='Search'/>
    </div>
  );
};

export default SearchBar;
