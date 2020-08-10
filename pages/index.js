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
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js Bootstrap!</a>
        </h1>
        <Link href="/foo">Foozz</Link>
      </main>
    </div>
  );
}
