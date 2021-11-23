import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Head from "next/head";
import HeroSection from "../../layouts/pricing_l/HeroSection";
import { useEffect, useState } from "react";
import Section2 from "../../layouts/pricing_l/Section2";
import Section3 from "../../layouts/pricing_l/Section3";

const Pricing = () => {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.scrollY,
      });
    }

    window.addEventListener("scroll", handleResize);

    handleResize();

    return () => window.removeEventListener("scroll", handleResize);
  }, []);

  return (
    <div>
      <Head>
        <title>PHOTONSNAP-PRICING</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main
        className={`w-full ${windowSize.height >= 200 ? "mt-[70px]" : "mt-0"}`}
      >
        <HeroSection />
        <Section2 />
        <Section3 />
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
