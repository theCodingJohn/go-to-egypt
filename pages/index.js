import Head from "next/head";
import Header from "../components/Header";
import Civilization from "../components/Civilization";
import Facts from "../components/Facts";

const Home = () => {
  return (
    <>
      <Head>
        <title>Go to Egypt</title>
      </Head>
      <Header />
      <main>
        <Civilization />
        <Facts />
      </main>
    </>
  );
};

export default Home;
