import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
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
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
