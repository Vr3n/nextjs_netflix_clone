import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center bg-black">
        <h1 className="text-4xl font-bold">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-2xl">Watch anywhere, Cancel anytime.</p>
      </main>
    </div>
  );
}
