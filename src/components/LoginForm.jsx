// LoginForm.js

'use client';

import React, {useState} from 'react';

export default function LoginForm({ onSubmit, loading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password }); // call the onSubmit function passed as a prop
    console.log(email, password)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Email Address</label>
        <div className="relative mt-1">
          <input
            type="email"
            placeholder="alex@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600">Password</label>
        <div className="relative mt-1">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-linear text-white rounded-lg font-semibold hover:bg-orange-linear-600 focus:outline-none"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login Now'}
        </button>
      </div>
    </form>
  );
}
