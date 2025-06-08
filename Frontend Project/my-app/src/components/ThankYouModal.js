import React from 'react';

const ThankYouModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 relative animate-fadeIn flex flex-col items-center">
        <div className="text-4xl mb-2">❤️</div>
        <h3 className="text-xl font-bold mb-2 text-center">Thank you for connecting with us.</h3>
        <p className="text-gray-500 mb-6 text-center text-sm">Our team will contact you soon.</p>
        <button onClick={onClose} className="w-full py-2 bg-primary text-white rounded font-semibold shadow hover:bg-primary-dark transition">Done</button>
      </div>
    </div>
  );
};

export default ThankYouModal; 