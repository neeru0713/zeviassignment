import React from "react";
import "../assets/styles/ProductsPage.scss";
import logo from "../assets/images/zevi-logo.webp";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import ProductCard from './ProductCard';
import stylishJacket from "../assets/images/stylishJacket.jpg"
import designerDress from "../assets/images/designer-dress.webp"
import patternDress from "../assets/images/patterndress.jpg"
import formalSuit from "../assets/images/formalSuit.jpeg"
import leatherShirt from "../assets/images/leatherShirt.jpeg"

const ProductsPage: React.FC = () => {
  const brands: string[] = ["Mango", "H&M"];
  const prices: string[] = ["Under 500", "1000 To 3000"];
  // const rating: string[] =["*****","****","***","**","*"];


  const products = [
    { id: 1, name: 'Product 1', price: '$50', imageUrl: stylishJacket, rating: 3 },
    { id: 2, name: 'Product 2', price: '$100', imageUrl: designerDress, rating: 3 },
    { id: 3, name: 'Product 3', price: '$75', imageUrl: patternDress, rating: 3 },
    { id: 4, name: 'Product 4', price: '$120', imageUrl: formalSuit, rating: 3 },
    { id: 4, name: 'Product 4', price: '$120', imageUrl: leatherShirt, rating: 3 },
    { id: 4, name: 'Product 4', price: '$120', imageUrl: designerDress, rating: 3 },
    { id: 4, name: 'Product 4', price: '$120', imageUrl: formalSuit, rating: 3 },
    { id: 4, name: 'Product 4', price: '$120', imageUrl: patternDress, rating: 3 },
   
  ];

  return (
    <div className="products-page">
     

      <header>
        <SearchBar className="products-page-search" />
      </header>

      <h1>Search Results</h1>
      
      <section>
        <div id="filter-section">
          <Filter heading="BRAND" data={brands} />
          <hr/>
          <Filter heading="PRICE RANGE" data={prices} />
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
