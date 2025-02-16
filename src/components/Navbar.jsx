import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md w-full fixed">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Currency Converter</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/" className="hover:text-yellow-300 transition">Rate</Link>
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
