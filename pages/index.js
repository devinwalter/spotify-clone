import { getSession } from "next-auth/react";
import Head from "next/head";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Devin Walter's Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />

        <div>{/* Player */}</div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
