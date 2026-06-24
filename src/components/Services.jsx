import React, { useState } from "react";
import { st } from "../styles/styles.js";
import { C } from "../styles/tokens.js";
import { SERVICES } from "../data/content.js";
import { Reveal } from "../hooks/useReveal.jsx";

function ServiceCard({ s, i }) {
  const [hover, setHover] = useState(false);
  return (
    <Reveal
      delay={i * 70}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...st.scard,
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        borderColor: hover ? C.blue400 : "rgba(255,255,255,0.08)",
        boxShadow: hover ? "0 20px 45px rgba(124,58,237,0.22)" : "0 6px 20px rgba(0,0,0,0.18)",
      }}
    >
      <div style={st.scardIcon}>{s.icon}</div>
      <h3 style={st.scardTitle}>{s.title}</h3>
      <p style={st.scardDesc}>{s.desc}</p>
      <div style={st.scardTags}>
        {s.tags.map((tag) => (
          <span key={tag} style={st.scardTag}>
            {tag}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export default function Services({ onNavigate }) {
  return (
    <section id="services" style={st.sectionPad}>
      <div style={st.servicesHeader} className="itsi-services-header">
        <Reveal>
          <span style={st.label}>What We Do</span>
          <h2 style={st.title}>
            End-to-end IT solutions
            <br />
            for <span style={st.italic}>modern businesses.</span>
          </h2>
          <p style={st.sub}>
            From concept to deployment — we handle every layer of the tech stack so you can focus on your business.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("contact");
            }}
            style={st.btnPrimary}
          >
            Get a Free Quote →
          </a>
        </Reveal>
      </div>

      <div style={st.servicesGrid}>
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} s={s} i={i} />
        ))}
      </div>
    </section>
  );
}
