
'use client';

import React, { useEffect } from 'react'
import { useLogin } from '../../hooks/useLogin';
import LoginForm from '@/components/LoginForm';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { login, loading, error } = useLogin();

  // definisikan router disini untuk handle redirect
  const router = useRouter();

  // handle pake useEffect
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      router.push('/'); // redirect ke halaman dashboard
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Login into your account</h3>
        </div>

        <LoginForm onSubmit={login} loading={loading} />

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="text-center text-sm">
          <a href="#" className="text-indigo-500 hover:underline">Forgot Password?</a>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">OR</p>
          <button
            type="button"
            className="mt-3 w-full py-2 px-4 border border-orange-linear text-orange-linear-500 rounded-lg font-semibold hover:bg-orange-100 focus:outline-none"
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage