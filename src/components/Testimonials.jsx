import React, { useEffect, useState } from "react";
import { st } from "../styles/styles.js";
import { C } from "../styles/tokens.js";
import { TESTIMONIALS } from "../data/content.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" style={st.sectionPad}>
      <Reveal style={{ maxWidth: 560, margin: "0 auto 3rem", textAlign: "center" }}>
        <span style={st.label}>Client Stories</span>
        <h2 style={st.title}>What our clients say.</h2>
        <p style={{ ...st.sub, margin: "0 auto" }}>
          Real feedback from real businesses. We let results do the talking.
        </p>
      </Reveal>

      <div style={st.tgrid}>
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 100}
            style={{
              ...st.tcard,
              borderColor: active === i ? C.blue400 : "rgba(255,255,255,0.08)",
              transform: active === i ? "scale(1.02)" : "scale(1)",
            }}
          >
            <div style={st.tcardStars}>{"★".repeat(t.stars)}</div>
            <p style={st.tcardText}>"{t.text}"</p>
            <div style={st.tcardAuthor}>
              <div style={st.tcardAv}>{t.initials}</div>
              <div>
                <div style={st.tcardName}>{t.name}</div>
                <div style={st.tcardRole}>{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div style={st.tDots}>
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show testimonial ${i + 1}`}
            style={{
              ...st.tDot,
              background: active === i ? C.blue400 : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
