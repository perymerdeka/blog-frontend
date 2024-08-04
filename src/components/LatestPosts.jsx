import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const LatestPosts = () => {
  const posts = [
    { title: 'The Power of Dream', date: '28 June 2021' },
    { title: 'Emotional Healing', date: '22 June 2021' },
    { title: 'Works vs School', date: '21 June 2021' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full lg:w-2/5 py-8 px-12 mx-2">
      <div className="bg-orange-linear-200 rounded-full py-2 px-4 mb-4">
        <h3 className="text-lg font-bold text-center">Latest Posts</h3>
      </div>
      <ul className="mt-4 space-y-4">
        {posts.map((post, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <h4 className="text-md font-semibold">{post.title}</h4>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
            <FaRegCalendarAlt className="text-gray-400" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPosts;
