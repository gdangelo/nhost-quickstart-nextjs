import Head from 'next/head';
import ResetPassword from '../components/ResetPassword';

const ResetPasswordPage = () => {
  return (
    <>
      <Head>
        <title>Reset password - Nhost</title>
      </Head>

      <div className="h-screen flex items-center justify-center py-6">
        <ResetPassword />
      </div>
    </>
  );
};

export default ResetPasswordPage;
