import React, { useState } from "react";
import "../assets/styles/ProductsPage.scss";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import logo from "../assets/images/zevi-logo.webp"
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
    { id: 1, name: "Product 1", price: "$50", imageUrl: stylishJacket, rating: 4, brand: "Mango" },
    { id: 2, name: "Product 2", price: "$1000", imageUrl: designerDress, rating: 5, brand: "H&M" },
    { id: 3, name: "Product 3", price: "$75", imageUrl: patternDress, rating: 4, brand: "Mango" },
    { id: 4, name: "Product 4", price: "$820", imageUrl: formalSuit, rating: 4, brand: "H&M" },
    { id: 5, name: "Product 5", price: "$1120", imageUrl: leatherShirt, rating: 5, brand: "Mango" },
  ];

  const handleFilterChange = (filters: string[], heading: string) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
  
      if (filters.length === 0) {
        // If filters array is empty, remove the entire filter entry for the heading
        delete updatedFilters[heading];
      } else {
        // If filters array is not empty, update the filters for the heading
        updatedFilters[heading] = filters;
      }
  
      return updatedFilters;
    });
  };
  
  const filteredProducts = products.filter((product) => {
    return Object.keys(selectedFilters).every((heading) => {
      const filter = selectedFilters[heading];

      if (heading === "BRAND") {
        return filter.includes(product.brand);
      } else if (heading === "PRICE RANGE") {
        return filter.every((priceFilter) => {
          if (priceFilter.includes("Under")) {
            const [, maxPrice] = priceFilter.split("Under ");
            const productPrice = parseFloat(product.price.replace("$", ""));
            return productPrice <= parseFloat(maxPrice);
          } else {
            const [minPrice, maxPrice] = priceFilter.split(" To ");
            const productPrice = parseFloat(product.price.replace("$", ""));
            return productPrice >= parseFloat(minPrice) && productPrice <= parseFloat(maxPrice);
          }
        });
      } else if (heading === "RATING") {
        return filter.includes(`${product.rating}`);
      }

      return true;
    });
  });
  
  
  

  return (
    <div className="products-page">
       <a href="/"><img src={logo} id="landing-page-icon"/></a> 
      <header>
        <SearchBar className="products-page-search" />
      </header>

      <h1>Search Results</h1>

      <section>
        <div id="filter-section">
          <Filter heading="BRAND" data={brands} onFilterChange={handleFilterChange} />
          <hr />
          <Filter heading="PRICE RANGE" data={prices} onFilterChange={handleFilterChange} />
          <hr />
          <Filter heading="RATING" data={[]} onFilterChange={handleFilterChange} />
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} rating={product.rating}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
