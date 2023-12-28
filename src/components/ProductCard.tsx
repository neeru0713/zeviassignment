
import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
  rating: number
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl, rating }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
