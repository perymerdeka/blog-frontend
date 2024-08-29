'use client';

import { useState } from 'react';

const API_URL = process.env.API_URL || 'http://localhost:8000';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // handle logika login
  const login = async ({ email, password }) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data)

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Something went wrong');
      }

      // save token to local storage
      localStorage.setItem('accessToken', data.userCredential.user.stsTokenManager.accessToken);
      localStorage.setItem('refreshToken', data.userCredential.user.stsTokenManager.refreshToken);


      // redirect ke halaman dashboard
      window.location.href = '/';

    

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

   // handle logout
   const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/login');
  };

  // handle refresh token
  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token available');

    const response = await fetch(`${API_URL}/api/auth/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.message || 'Failed to refresh token');
    }

    localStorage.setItem('accessToken', data.accessToken);
    return data.accessToken;
  };


  return { login, logout, refreshAccessToken, loading, error };

 
}
