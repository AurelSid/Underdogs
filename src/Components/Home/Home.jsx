import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-tr from-black via-zinc-800 to-black">
        <Hero />
        <Section1 />
        <Section2 />
        <Footer />
      </div>
    </>
  );
}

export default Home;
