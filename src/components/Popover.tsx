// src/components/Popover.tsx
import React, { useState, useEffect } from "react";
import { faker } from '@faker-js/faker';
import "../assets/styles/Popover.scss";
import stylishJacket from "../assets/images/stylishJacket.jpg"
import designerDress from "../assets/images/designer-dress.webp"
import patternDress from "../assets/images/patterndress.jpg"
import formalSuit from "../assets/images/formalSuit.jpeg"
import leatherShirt from "../assets/images/leatherShirt.jpeg"

interface TrendData {
  image: string;
  caption: string;
}

const Popover: React.FC<{ open: boolean }> = ({ open }) => {
  const [latestTrends, setLatestTrends] = useState<TrendData[]>([]);
  const [popularSuggestions, setPopularSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const latestTrendsData: TrendData[] = [
      { image: stylishJacket , caption: 'Stylish Jacket' },
      { image: designerDress, caption: 'Designer Dress' },
      { image: patternDress, caption: 'Pattern Dresses' },
      { image: formalSuit , caption: 'Formal Suit' },
      { image: leatherShirt, caption: 'Leather Shirt Dress' },
    ];

    // Manually define clothing-related data for popular suggestions
    const popularSuggestionsData: string[] = [
      'Casual T-Shirt',
      'Formal Suit',
      'Summer Shorts',
      'Running Shoes',
      'Party Dress',
    ];

    setLatestTrends(latestTrendsData);
    setPopularSuggestions(popularSuggestionsData);
  }, [open]); 

  return (
    <div className={open ? "popover" : "popover-hidden"}>
      <section id="latest-trends">
        <h2>Latest Trends</h2>
        <div id="image-gallery">
          {latestTrends.map((item, index) => (
            <div key={index} className="card">
                <a href="/products">
                <img src={item.image} alt={`Trend ${index + 1}`} />
                </a>
             
              <div className="caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="popular-suggestions">
        <h2>Popular Suggestions</h2>
        <ul>
          {popularSuggestions.map((item, index) => (
            <a href="/products">
                 <li key={index}>{item}</li>
            </a>
           
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Popover;
