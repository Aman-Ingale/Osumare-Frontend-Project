import React from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

// Placeholder image import (replace with actual image path)
// import heroImg from '../assets/hero-user.jpg'; // Place your image in assets or use a placeholder

const logos = [
  '/assets/logo1.png',
  '/assets/logo2.png',
  '/assets/logo3.png',
  '/assets/logo4.png',
  '/assets/logo5.png',
];

const AboveHeroSection = () => (
  <section className="w-full bg-white py-12 flex justify-center text-center px-4 md:px-8">
    <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex-1 flex flex-col items-center space-y-6 mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Simplify Your Life with Our <br /> Todo App
        </h1>
        <p className="text-gray-600 max-w-lg text-center">
          Stay organized and boost your productivity with our intuitive todo website. Experience a modern approach to task management that fits your lifestyle.
        </p>
        <div className='flex gap-5 justify-center'>
          <button className="px-6 py-2 bg-primary text-white rounded font-semibold shadow hover:bg-primary-dark transition">Get started</button>
          <button className="px-6 py-2 border border-primary text-primary rounded font-semibold hover:bg-primary hover:text-white transition">Learn more</button>
        </div>
      </div>
    </div>
  </section>
);

const LogoStripSection = () => (
  <section className="w-full flex justify-between py-6 px-4 md:px-8 bg-white">
  
      <div className="flex gap-8 items-center bg-white/80 rounded-xl px-8 py-4 shadow justify-between w-full">
        <img src='assets/google.png'></img>
        <img src='assets/facebook.png'></img>
        <img src='assets/youtube.png'></img>
        <img src='assets/pintrest.png'></img>
        <img src='assets/twitch.png'></img>
      </div>
  </section>
);

const HeroSection = ({ onStartOrganizing }) => (
  <>
    <AboveHeroSection />
    <section className="w-full bg-white py-0 px-4 md:px-8 flex justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-12">
        <div className="flex-1 bg-[#ff4e6a] rounded-3xl p-10 md:p-16 flex flex-col justify-between items-start min-w-[320px] max-w-xl shadow-lg mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight" style={{lineHeight: '1.1'}}>
            Organize.<br />Achieve.<br />Relax.
          </h1>
          <p className="text-lg text-white mb-12">Turn clutter into clarity, chaos into control, and dreams into done.<br />bold visions into market success</p>
          <div className="flex gap-6 justify-center w-full">
            <button onClick={onStartOrganizing} className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg shadow hover:bg-gray-100 transition">Get Started Today</button>
            <button className="px-8 py-4 bg-white/20 text-white rounded-full font-semibold text-lg shadow hover:bg-white/30 transition border border-white/30">Discover Features</button>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-3xl p-0 flex items-center justify-center min-w-[320px] max-w-xl shadow-lg relative overflow-hidden mx-auto" style={{minHeight: '500px'}}>
          <img src="/assets/hero.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl z-0" />
          <div className="absolute inset-0 bg-black/40 rounded-3xl z-10"></div>
          <div className="relative w-full h-full flex flex-col justify-end items-start z-20 p-10">
            <div className="absolute top-6 right-10 flex gap-2 z-30">
              <span className="w-2 h-2 rounded-full bg-white/60 inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-white/90 inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-white/60 inline-block"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 z-30">Your Tasks.<br />Our Tools.</h2>
            <div className="flex items-center gap-4 mb-6 z-30">
              <button className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white text-lg"><FaChevronLeft /></button>
              <button className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white text-lg"><FaChevronRight /></button>
            </div>
            <div className="text-white text-xl font-semibold z-30">Freddie Halvorson</div>
            <div className="text-white/80 text-sm mb-4 z-30">Chief Productivity Enthusiast</div>
            <button className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-black text-2xl shadow-lg z-30"><FaPlay /></button>
          </div>
        </div>
      </div>
    </section>
    <LogoStripSection />
  </>
);

export default HeroSection; 