import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1>Welcome to TechLadies!</h1>
        <Link href="/about/">About</Link>
      </main>
    </div>
  );
}
