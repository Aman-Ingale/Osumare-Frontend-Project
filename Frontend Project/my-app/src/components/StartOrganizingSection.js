import React from 'react';

const StartOrganizingSection = ({ onStartOrganizing }) => (
  <section className="w-full py-12 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-8">
      {/* Left: Phone Image Placeholder */}
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <img src='assets/phone.png'></img>
        
      </div>
      {/* Right: Headline, Subheadline, CTA */}
      <div className="flex-1 flex flex-col items-start space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          Start Organizing Your Life Today
        </h2>
        <p className="text-gray-600 max-w-md">
          Join us now and transform your productivity with our intuitive to-do list platform!
        </p>
        <div className="flex space-x-4">
          <button onClick={onStartOrganizing} className="px-6 py-2 bg-primary text-white rounded font-semibold shadow hover:bg-primary-dark transition">Sign Up</button>
          <button className="px-6 py-2 border border-primary text-primary rounded font-semibold hover:bg-primary hover:text-white transition">Learn More</button>
        </div>
      </div>
    </div>
  </section>
);

export default StartOrganizingSection; 