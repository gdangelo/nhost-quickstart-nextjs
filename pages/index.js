import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nhost - Quickstart Next.js</title>
        <meta
          name="description"
          content="Nhost Quickstart example for Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Hello, Nhost!</h1>
    </div>
  );
}
