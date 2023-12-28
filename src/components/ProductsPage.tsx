
import React from 'react';
import '../assets/styles/ProductsPage.scss';
import logo from "../assets/images/zevi-logo.webp"
import SearchBar from './SearchBar';
import Filter from './Filter'
const ProductsPage: React.FC = () => {
  return (
    <div className="products-page">

<img src={logo} id="landing-page-icon"/>
     
     <header>
      <SearchBar className="products-page-search"/>
      </header>
      <h2>Search Results</h2>
      <section>
        <div id="filter-section">
<Filter/>
<Filter/>
<Filter/>

        </div>

        <div>

        </div>
      </section>


     
     
     
    </div>
  );
};

export default ProductsPage;
