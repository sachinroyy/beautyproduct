import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black p-4 shadow-md   ">
      <div className="container mx-auto flex justify-between items-center uppercase font-bold  ">
        {/* Logo or Title */}
        <h1 className="text-white text-2xl font-bold">FASSION WORLD</h1>

        Navigation Links
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white">
                About 
               </Link>
            </li>
            <li>
              <Link to="/services" className="text-white">
                Services
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
