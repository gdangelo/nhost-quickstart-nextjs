import styles from '../styles/pages/SignUp.module.css';

import Head from 'next/head';
import ResetPassword from '../components/ResetPassword';

const ResetPasswordPage = () => {
  return (
    <>
      <Head>
        <title>Reset password - Nhost</title>
      </Head>

      <div className={styles.container}>
        <ResetPassword />
      </div>
    </>
  );
};

export default ResetPasswordPage;
