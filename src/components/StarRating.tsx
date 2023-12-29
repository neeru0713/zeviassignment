import React from 'react';
import '../assets/styles/StarRating.scss';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const filledStars = Math.min(5, Math.max(0, Math.round(rating)));
  const emptyStars = 5 - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="filled-star">&#9733;</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="empty-star">&#9733;</span>
      ))}
    </div>
  );
};

export default StarRating;
