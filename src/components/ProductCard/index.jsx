import React from "react";
import { Link } from 'react-router-dom';

function ProductCard({ products = [] }) {
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      <section className="text-gray-600 body-font"  style={{ backgroundColor: 'whitesmoke', fontFamily: "'Poppins', sans-serif" }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              const { id, title, price, description, category, image } = product;

              return (
                <Link 
                  to={`/products/${id}`} 
                  key={id} 
                  className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"
                >
                  <div className="block relative h-48 rounded overflow-hidden border border-opacity-50">
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {title}
                    </h2>
                    <p className="mt-1 font-bold">${price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;