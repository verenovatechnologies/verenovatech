import React, { useCallback, useEffect, useState } from "react";
import { st } from "./styles/styles.js";
import { SECTION_IDS } from "./data/content.js";

import Navbar from "./components/Navbar.jsx";
import HeroSlider from "./components/HeroSlider.jsx";
import TrustBar from "./components/TrustBar.jsx";
import Services from "./components/Services.jsx";
import HowWeWork from "./components/HowWeWork.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import CtaBand from "./components/CtaBand.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div style={st.page}>
      <Navbar active={active} onNavigate={navigate} />
      <HeroSlider onNavigate={navigate} />
      <TrustBar />
      <Services onNavigate={navigate} />
      <HowWeWork />
      <About />
      <Testimonials />
      <Contact />
      <CtaBand onNavigate={navigate} />
      <Footer onNavigate={navigate} />
    </div>
  );
}
