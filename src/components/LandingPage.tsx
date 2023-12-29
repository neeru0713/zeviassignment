
import React from 'react';
import '../assets/styles/LandingPage.scss';
import logo from "../assets/images/zevi-logo.webp"
import SearchBar from './SearchBar';
const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
         <img src={logo} id="landing-page-icon"/>
      <header>
      <SearchBar className='landing-page-search'/>
       
      </header>
     
    </div>
  );
};

export default LandingPage;
