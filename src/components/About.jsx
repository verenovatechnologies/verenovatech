import React, { useEffect, useState } from "react";
import { st } from "../styles/styles.js";
import { PILLARS, STATS } from "../data/content.js";
import { Reveal, useReveal } from "../hooks/useReveal.jsx";

function Counter({ target, suffix, decimals = 0 }) {
  const [ref, visible] = useReveal();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = null;
    const duration = 1400;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(target * eased);
      if (progress < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [visible, target]);

  return (
    <div ref={ref} style={st.numVal}>
      {val.toFixed(decimals)}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={st.sectionPad}>
      <div style={st.aboutWrap} className="itsi-grid-2">
        <Reveal>
          <span style={st.label}>About Us</span>
          <h2 style={st.title}>
            A startup that moves
            <br />
            at <span style={st.italic}>startup speed.</span>
          </h2>
          <p style={st.sub}>
            VereNova Technologies was founded with a simple idea: most businesses need great software but can't afford
            bloated agencies. We're the sharp, experienced team that fills that gap — moving fast, communicating
            clearly, and delivering work that lasts.
          </p>

          <div style={{ marginTop: 24 }}>
            {PILLARS.map((p) => (
              <div key={p.title} style={st.pillar}>
                <div style={st.pillarIcon}>{p.icon}</div>
                <div>
                  <h4 style={st.pillarTitle}>{p.title}</h4>
                  <p style={st.pillarDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div style={st.aboutCard}>
            <div style={st.numGrid} className="itsi-num-grid">
              {STATS.map((s) => (
                <div key={s.label} style={st.numBlock}>
                  <Counter target={s.target} suffix={s.suffix} decimals={s.decimals} />
                  <div style={st.numLabel}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={st.aboutQuote}>
              "We don't just write code —<br />
              we solve the problem behind the brief."
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
