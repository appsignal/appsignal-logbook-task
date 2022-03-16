import Head from "next/head";
import Header from "../components/Header/Header";

const Home = ({ messages }) => {
  return (
    <div>
      <Head>
        <title>Appsignal Logbook</title>
        <meta name="description" content="Where logs tell the whole story ;)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 h-screen w-full">
        <Header />

        <section className="flex justify-center p-8">
          <h1>Hello world</h1>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/messages");
  const messages = await data.json();

  return {
    props: {
      messages,
    },
  };
}

export default Home;
