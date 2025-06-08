import React from 'react';

const Header = ({onStartOrganizing}) => (
  <header className="w-full bg-white shadow-sm sticky top-0 z-30 px-10">
    <div className="max-w-10xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
      {/* Logo */}
      <div className="flex items-center space-x-2 w-20">
        <img src='assets/logo.png'></img>
      </div>
      {/* Navigation */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 ">
        <a href="" className="hover:text-primary">About Us</a>
        <a href="" className="hover:text-primary">Features</a>
        <a href="" className="hover:text-primary">More Option</a>
        <a href="" className="hover:text-primary">Contact</a>
      </nav>
      {/* Actions */}
      <div className="space-x-2">
        <button className="px-4 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">Log In</button>
        <button className="px-4 py-1 bg-primary text-white rounded hover:bg-primary-dark transition" onClick={onStartOrganizing}>Sign Up</button>
      </div>
    </div>
  </header>
);

export default Header; 