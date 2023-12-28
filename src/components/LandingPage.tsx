// src/components/LandingPage.tsx
import React from 'react';
import '../assets/styles/LandingPage.scss';
import logo from "../assets/images/zevi-logo.webp"
import SearchBar from './SearchBar';
const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
         <img src={logo} id="landing-page-bg"/>
      <header>
      <SearchBar/>
       
      </header>
     
    </div>
  );
};

export default LandingPage;
