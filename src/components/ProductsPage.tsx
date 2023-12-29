import React, { useState } from "react";
import "../assets/styles/ProductsPage.scss";
import logo from "../assets/images/zevi-logo.webp";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import stylishJacket from "../assets/images/stylishJacket.jpg";
import designerDress from "../assets/images/designer-dress.webp";
import patternDress from "../assets/images/patterndress.jpg";
import formalSuit from "../assets/images/formalSuit.jpeg";
import leatherShirt from "../assets/images/leatherShirt.jpeg";

interface Filter {
  heading: string;
  filters: string[];
}

const ProductsPage: React.FC = () => {
  const brands: string[] = ["Mango", "H&M"];
  const prices: string[] = ["Under 500", "1000 To 3000"];

  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  const products = [
    { id: 1, name: "Product 1", price: "$50", imageUrl: stylishJacket, rating: 3, brand: "Mango" },
    { id: 2, name: "Product 2", price: "$100", imageUrl: designerDress, rating: 3, brand: "H&M" },
    { id: 3, name: "Product 3", price: "$75", imageUrl: patternDress, rating: 3, brand: "Mango" },
    { id: 4, name: "Product 4", price: "$120", imageUrl: formalSuit, rating: 3, brand: "H&M" },
    { id: 5, name: "Product 5", price: "$120", imageUrl: leatherShirt, rating: 3, brand: "Mango" },
  ];

  const filteredProducts = products.filter((product) => {
    // Check if the product matches all selected filters
    return Object.keys(selectedFilters).every((heading) => {
      const filter = selectedFilters[heading];
      if (heading === "BRAND") {
        // Check brand filter
        return filter.includes(product.brand);
      } else if (heading === "PRICE RANGE") {
        // Check price filter
        if (filter.length === 1) {
          const [minPrice, maxPrice] = filter[0].split(" To ");
          const productPrice = parseFloat(product.price.replace("$", ""));
          return productPrice >= parseFloat(minPrice) && productPrice <= parseFloat(maxPrice);
        }
      }
      return true;
    });
  });

  const handleFilterChange = (filters: string[], heading: string) => {
    
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
  
      if (filters.length === 0) {
      
        delete updatedFilters[heading];
      } else {
     
        updatedFilters[heading] = filters;
      }
  
      return updatedFilters;
    });
  };
  
  

  return (
    <div className="products-page">
      <header>
        <SearchBar className="products-page-search" />
      </header>

      <h1>Search Results</h1>

      <section>
        <div id="filter-section">
          <Filter heading="BRAND" data={brands} onFilterChange={handleFilterChange} />
          <hr />
          <Filter heading="PRICE RANGE" data={prices} onFilterChange={handleFilterChange} />
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
