import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero/index';
import Stats from '../../components/StatCard/index';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Categories';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products?limit=12');
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
      </div>
      {
        products.length > 0 ? 
          <ProductCard products={products} />
        :
        <div>Loading...</div>
      }
      <Stats />
    </div>
  );
}

export default Home;