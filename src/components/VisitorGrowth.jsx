import React from 'react';

const VisitorGrowth = () => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md w-full lg:w-3/5">
      <h2 className="text-2xl font-bold">Visitor Growth</h2>
      <p className="text-gray-500">Overall Information</p>
      <div className="flex items-center mt-4">
        <button className="px-4 py-2 bg-red-300 text-white rounded-l-lg">Monthly</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-r-lg">Yearly</button>
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
