import React from "react";
import "./assets/styles/App.scss";
import LandingPage from "./components/LandingPage";
// import TrendingCloths from "./components/TrendingCloths";
// import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  return (
    <div className="app">
    <LandingPage/>
    </div>
  );
};

export default App;
