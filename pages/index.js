import Head from "next/head";
import Header from "../components/header";
import Civilization from "../components/Civilization";

const Home = () => {
  return (
    <>
      <Head>
        <title>Go to Egypt</title>
      </Head>
      <Header />
      <main>
        <Civilization />
      </main>
    </>
  );
};

export default Home;
