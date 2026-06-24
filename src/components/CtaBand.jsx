import React from "react";
import { st } from "../styles/styles.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function CtaBand({ onNavigate }) {
  return (
    <div style={st.ctaBand}>
      <Reveal>
        <h2 style={st.ctaHeading}>
          Ready to ship your
          <br />
          next big idea?
        </h2>
        <p style={st.ctaText}>
          Join the businesses that trust VereNova Technologies to turn complex requirements into clean, working software
          — on time, on budget.
        </p>
        <div style={st.ctaBtns}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("contact");
            }}
            style={st.btnWhite}
          >
            Start a Project →
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("services");
            }}
            style={st.btnOutlineWhite}
          >
            Browse Services
          </a>
        </div>
      </Reveal>
    </div>
  );
}
