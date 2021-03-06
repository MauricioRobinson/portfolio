import Head from "next/head";
import { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home({ data }) {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div>
      <Head>
        <title>Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar darkMode={darkMode} toogleDarkMode={handleToggleDarkMode} />
        <Header darkMode={darkMode} />
        <About data={data} darkMode={darkMode} />
      </main>
    </div>
  );
}
