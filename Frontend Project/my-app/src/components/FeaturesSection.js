import React from 'react';
import { FiLayout, FiSend, FiUsers, FiClipboard } from 'react-icons/fi';

const features = [
  {
    icon: <FiLayout size={40} className="text-[#ff3e5b] mb-4" />, 
    title: 'User-Friendly Interface',
    desc: 'Our platform offers seamless task management to boost your efficiency.',
  },
  { 
    icon: <FiSend size={40} className="text-[#ff3e5b] mb-4" />, 
    title: 'Collaborate & Share Effortlessly',
    desc: 'Invite team members to work together and achieve your goals faster.',
  },
  {
    icon: <FiUsers size={40} className="text-[#ff3e5b] mb-4" />, 
    title: 'Effortless Collaboration',
    desc: 'Invite team members to work together and achieve your goals faster.',
  },
  {
    icon: <FiClipboard size={40} className="text-[#ff3e5b] mb-4" />, 
    title: 'Seamless Access',
    desc: 'Stay connected and manage your tasks on the go with ease.',
  },
];

const FeaturesSection = () => (
  <section id="features" className="w-full flex flex-col items-center py-20 bg-[#fafaff] px-4 md:px-8 ">
    <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center">
      <div className="text-5xl font-bold text-center max-w-3xl text-[#1a2550] mb-4 mx-auto flex items-center justify-center">
        Transform Your Productivity with Our Innovative To-Do List Features
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 w-full">
        {features.map((feature, idx) => (
          <div key={feature.title} className="bg-gray-100 rounded-xl p-8 flex flex-col items-center shadow-md relative min-h-[320px] mx-auto">
            <div className="absolute top-6 right-6 text-4xl font-bold text-gray-400 font-raleway select-none">0{idx + 1}</div>
            <div className="mb-2">{feature.icon}</div>
            <h3 className="font-bold text-lg text-center text-[#1a2550] mb-2">{feature.title}</h3>
            <div className="w-16 h-2 bg-[#ff3e5b] rounded-full mb-4 flex flex-row gap-2">
              <div className="w-8 h-2 bg-[#ff3e5b] rounded-full"></div>
              <div className="w-4 h-2 bg-[#ff3e5b] rounded-full opacity-60"></div>
            </div>
            <p className="text-gray-500 text-base text-center">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection; 