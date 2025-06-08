import React from 'react';
// import userImg from '../assets/testimonial-user.jpg'; // Add your image to assets or use a placeholder
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => (
  <section className="w-full py-12 bg-white px-10 ">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1a2550] m-2">Customer Testimonials</h2>
      <p className="text-lg text-[#1a2550] m-8">This tool has transformed my productivity and organization!</p>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative">
        {/* Red border background */}
        <div className="m-5 absolute -left-16 -top-10 w-[480px] h-[480px] border-8 border-[#ff3e5b] rounded-lg z-0 hidden md:block"></div>
        {/* Testimonial Card */}
        <div className="flex-1 bg-white rounded-xl p-12 shadow-lg border-0 relative z-10 flex flex-col justify-between min-h-[350px] m-5">
          <p className="text-3xl font-bold text-gray-900 mb-8">
            Using this website has made my tasks so much easier! I can't imagine my day without it.
          </p>
          <div className="flex items-center mt-6">
            <div className="w-6 h-6 bg-[#ff3e5b] rounded-sm mr-4"></div>
            <div>
              <div className="font-bold text-lg text-black">Sherri Cronin</div>
              <div className="text-sm text-gray-700">Project Manager, TechCorp</div>
            </div>
          </div>
          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full border-2 border-[#ff3e5b] flex items-center justify-center text-[#ff3e5b] bg-white text-lg"><FaChevronLeft /></button>
            <button className="w-10 h-10 rounded-full bg-[#ff3e5b] flex items-center justify-center text-white text-lg"><FaChevronRight /></button>
          </div>
        </div>
        {/* User Image */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          {/* <div className="w-[340px] h-[340px] border-8 border-[#ff3e5b] rounded-lg flex items-center justify-center overflow-hidden">
          
          </div> */}
          <img src='assets/Image.png'></img>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 