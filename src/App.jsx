import "./App.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import ScrollText from "./components/ScrollText";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Donate from "./components/Donate";
import Footer from "./components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <>
        <Header />

        <main className="z-[4] flex mx-auto flex-col place-content-center gap-0 p-0 relative flex-none items-center w-full h-min">
          <Hero />
          <ScrollText />
          <Journey />
          <Services />
          <Testimonials />
          <Stats />
          <Donate />
        </main>

        <Footer />
      </>
    </ReactLenis>
  );
}

export default App;
