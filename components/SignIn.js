import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Input from './Input';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-lg">
      <div className="sm:rounded-xl sm:shadow-md sm:border border-opacity-50 sm:bg-white px-4 sm:px-8 py-12 flex flex-col items-center">
        <div className="relative h-14 w-full">
          <Image src="/logo.svg" alt="logo" layout="fill" objectFit="contain" />
        </div>

        <form onSubmit={handleOnSubmit} className="w-full">
          <div className="mt-12 w-full flex flex-col items-center space-y-6">
            <Input
              type="email"
              label="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full font-medium inline-flex justify-center items-center rounded-md p-3 text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed  disabled:hover:bg-blue-600 disabled:hover:border-bg-600 transition-colors"
          >
            Sign in
          </button>
        </form>

        <Link href="/reset-password">
          <a className="mt-4 text-blue-600 hover:text-blue-500 hover:underline hover:underline-offset-1 transition">
            Forgot your password?
          </a>
        </Link>
      </div>

      <p className="sm:mt-8 text-gray-500 text-center">
        No account yet?{' '}
        <Link href="/sign-up">
          <a className="text-blue-600 hover:text-blue-500 hover:underline hover:underline-offset-1 transition">
            Sign up
          </a>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
