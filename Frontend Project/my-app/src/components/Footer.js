import React from 'react';

const Footer = () => (
  <footer className="w-full bg-white border-t mt-8 p-10">
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Logo & Newsletter */}
      <div className="md:col-span-2 flex flex-col space-y-4">
        <div className="flex items-center space-x-2 w-20">
        <img src='assets/logo.png'></img>
      </div> 
      
        <span className="text-sm text-gray-500">Subscribe to our newsletter for the latest features and updates delivered to you.</span>
        <form className="flex mt-2">
          <input type="email" placeholder="Your email here" className="px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-r font-semibold hover:bg-primary-dark transition">Join</button>
        </form>
        <span className="text-xs text-gray-400">By subscribing, you agree to our Privacy Policy and agree to receive updates.</span>
      </div>
      {/* Useful Links */}
      <div>
        <div className="font-semibold mb-2">Useful Links</div>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>Home Page</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blog Posts</li>
          <li>FAQs</li>
        </ul>
      </div>
      {/* Resources */}
      <div>
        <div className="font-semibold mb-2">Resources</div>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>Help Center</li>
          <li>User Guide</li>
          <li>Community Forum</li>
          <li>Feedback</li>
          <li>Support</li>
        </ul>
      </div>
      {/* Social Links */}
      <div>
        <div className="font-semibold mb-2">Connect With Us</div>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8 border-t text-xs text-gray-400">
      <span>&copy; 2024 Osumare. All rights reserved.</span>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Cookie Settings</a>
      </div>
    </div>
  </footer>
);

export default Footer; 