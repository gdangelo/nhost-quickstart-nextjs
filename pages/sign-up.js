import Head from 'next/head';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign up - Nhost</title>
      </Head>

      <div className="h-screen flex items-center justify-center py-6">
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;
