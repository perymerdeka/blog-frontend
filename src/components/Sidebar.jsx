// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-bl from-orange-linear-500 to-orange-linear-300 h-screen px-12 py-12 text-white rounded-2xl justify-items-center">
      <h1 className="text-2xl font-bold mb-8">Feri Space</h1>
      <ul>
        <li className="mb-4 cursor-pointer hover:text-gray-300"><Link href="/">Dashboard</Link></li>
        <li className="mb-4 cursor-pointer hover:text-gray-300"><Link href="/posts">Posts</Link></li>
        <li className="mb-4 cursor-pointer hover:text-gray-300"><Link href="/categories">Categories</Link></li>
        <li className="mb-4 cursor-pointer hover:text-gray-300"><Link href="/media">Media</Link></li>
        <li className="mb-4 cursor-pointer hover:text-gray-300"><Link href="/users">Users</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
