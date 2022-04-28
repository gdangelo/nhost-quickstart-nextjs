import Head from 'next/head';
import SignIn from '../components/SignIn';

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Sign in - Nhost</title>
      </Head>

      <div className="h-screen flex items-center justify-center py-6">
        <SignIn />
      </div>
    </>
  );
};

export default SignInPage;
