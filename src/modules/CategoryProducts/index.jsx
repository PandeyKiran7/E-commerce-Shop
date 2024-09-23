import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

function CategoryProduct() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No products found in this category.</div>;

  return (
    <div>
      <ProductCard products={products} /> {/* Ensure correct prop passing */}
    </div>
  );
}

export default CategoryProduct;