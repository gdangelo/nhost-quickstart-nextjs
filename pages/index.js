import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();

  const user = null;

  useEffect(() => {
    if (!user) {
      router.push('sign-up');
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>Dashboard - Nhost</title>
      </Head>

      <div>
        <h2 className="text-3xl font-semibold">Dashboard</h2>

        <p className="mt-2 text-lg">
          Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
          <span role="img" alt="hello">
            👋
          </span>
        </p>

        <p className="mt-4 text-gray-500">
          Edit the{' '}
          <code className="bg-blue-100 text-blue-500 px-2 py-px rounded">
            pages/dash.js
          </code>{' '}
          file to populate this page.
        </p>
      </div>
    </Layout>
  );
}
