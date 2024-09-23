import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-whitesmoke text-black body-font border-t-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px" }}>
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
              <span className="ml-3 text-2xl">KIRAN_STORE</span>
            </a>
            <p className="mt-2 text-sm text-black">Your one-stop shop for all things amazing!</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">SHOP</h2>
              <nav className="list-none mb-10">
                <li><a className="text-black hover:text-gray-800">Products</a></li>
                <li><a className="text-black hover:text-gray-800">Categories</a></li>
                <li><a className="text-black hover:text-gray-800">Sales</a></li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">COMPANY</h2>
              <nav className="list-none mb-10">
                <li><a className="text-black hover:text-gray-800">About Us</a></li>
                <li><a className="text-black hover:text-gray-800">Contact</a></li>
                <li><a className="text-black hover:text-gray-800">Careers</a></li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">SUPPORT</h2>
              <nav className="list-none mb-10">
                <li><a className="text-black hover:text-gray-800">Help Center</a></li>
                <li><a className="text-black hover:text-gray-800">Returns</a></li>
                <li><a className="text-black hover:text-gray-800">Shipping</a></li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-black text-sm text-center sm:text-left">
              © 2024 E-Commerce — All rights reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-black" href="#">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-black" href="#">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-black" href="#">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
