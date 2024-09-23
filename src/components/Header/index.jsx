import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navigations = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <header
        className="text-black body-font shadow-md"
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex cursor-pointer title-font font-medium items-center text-black mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">E-Commerce</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-between w-full md:w-auto">
            <ul className="flex justify-center md:justify-start mb-4 md:mb-0">
              {navigations.map((navigation) => (
                <li key={navigation.name} className="mr-5">
                  <Link
                    to={navigation.path}
                    className="hover:text-gray-700 transition duration-300 ease-in-out"
                  >
                    {navigation.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-700 transition duration-300 ease-in-out rounded text-base mt-4 md:mt-0 ml-10 md:ml-0">
              Go to Cart
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
