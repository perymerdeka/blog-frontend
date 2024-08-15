import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="bg-white shadow-lg rounded-lg p-4 mt-2 lg:hidden">
      <ul className="flex flex-col gap-4">
        <li className="text-gray-700 cursor-pointer"><Link href="/">Dashboard</Link></li>
        <li className="text-gray-700 cursor-pointer"><Link href="/posts">Posts</Link></li>
        <li className="text-gray-700 cursor-pointer"><Link href="/categories">Categories</Link></li>
        <li className="text-gray-700 cursor-pointer"><Link href="/media">Media</Link></li>
        <li className="text-gray-700 cursor-pointer"><Link href="/users">Users</Link></li>
      </ul>

    </nav>
  );
};

export default Navbar;
