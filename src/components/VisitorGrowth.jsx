'use client';

import React, { useState } from 'react';

const VisitorGrowth = () => {
  const [activeButton, setActiveButton] = useState('monthly');

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md w-full lg:w-3/5">
      <div className="flex flex-row justify-between">

      <div className="flex flex-col">
      <h2 className="text-2xl font-bold">Visitor Growth</h2>
      <p className="text-gray-500">Overall Information</p>
      </div>
      
      <div className="flex items-center mt-4">
        <button
          className={`px-4 py-2 rounded-l-lg ${activeButton === 'monthly' ? 'bg-orange-linear-300 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setActiveButton('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${activeButton === 'yearly' ? 'bg-orange-linear-300 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setActiveButton('yearly')}
        >
          Yearly
        </button>
        </div>
      </div>
      <div className="mt-6 flex items-end h-64 space-x-2">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="w-4 bg-red-300 flex-1"
            style={{ height: `${Math.random() * 80 + 20}%`, maxHeight: 'calc(100% - 48px)' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VisitorGrowth;
