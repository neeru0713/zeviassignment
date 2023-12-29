import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import StarRating from './StarRating';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl, rating }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="product-card">
      <div className="heart-icon" onClick={handleLikeClick}>
        {isLiked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
      </div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <StarRating rating={rating} />
      <p>{price}</p>
      <div className="add-to-cart">
        <button>View Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
