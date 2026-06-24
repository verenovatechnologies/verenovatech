import React, { useState } from "react";
import { st } from "../styles/styles.js";
import { C } from "../styles/tokens.js";
import { STEPS, TIMELINE } from "../data/content.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function HowWeWork() {
  const [active, setActive] = useState(0);

  return (
    <section id="how" style={st.sectionPad}>
      <div style={st.howWrap} className="itsi-grid-2">
        <div>
          <Reveal>
            <span style={st.label}>Our Process</span>
            <h2 style={st.title}>
              From brief to
              <br />
              <span style={st.italic}>live product.</span>
            </h2>
            <p style={st.sub}>
              A clear, collaborative process with no surprises — just steady progress and honest communication every step of the way.
            </p>
          </Reveal>

          <div style={{ marginTop: 28 }}>
            {STEPS.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 80}
                as="div"
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={(e) => e.key === "Enter" && setActive(i)}
                style={{
                  ...st.step,
                  borderColor: active === i ? C.blue400 : "rgba(255,255,255,0.08)",
                  background: active === i ? "rgba(124,58,237,0.1)" : "transparent",
                }}
              >
                <div style={{ ...st.stepN, color: active === i ? C.blue400 : "rgba(255,255,255,0.35)" }}>
                  {step.n}
                </div>
                <div>
                  <h4 style={st.stepTitle}>{step.title}</h4>
                  <p style={st.stepDesc}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} style={st.howVisual} className="itsi-sticky">
          <div style={st.howVisualLabel}>Live Project · EcommerceX Platform</div>
          <div>
            {TIMELINE.map((item, i) => (
              <div key={item.title} style={st.tlItem}>
                <div style={st.tlDotWrap}>
                  <div
                    style={{
                      ...st.tlDot,
                      background:
                        item.state === "done" ? C.blue400 : item.state === "active" ? "#fff" : "transparent",
                      borderColor: item.state === "next" ? "rgba(255,255,255,0.25)" : C.blue400,
                      color: item.state === "active" ? C.blue600 : "#fff",
                    }}
                    className={item.state === "active" ? "itsi-spin" : ""}
                  >
                    {item.state === "done" ? "✓" : item.state === "active" ? "⟳" : ""}
                  </div>
                  {i < TIMELINE.length - 1 && <div style={st.tlLine} />}
                </div>
                <div style={{ flex: 1 }}>
                  <h5 style={st.tlTitle}>{item.title}</h5>
                  <p style={st.tlMeta}>{item.meta}</p>
                </div>
                <span
                  style={{
                    ...st.tlBadge,
                    color: item.state === "done" ? C.blue300 : item.state === "active" ? "#34d399" : "rgba(255,255,255,0.4)",
                    borderColor:
                      item.state === "done" ? "rgba(168,85,247,0.4)" : item.state === "active" ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.15)",
                  }}
                >
                  {item.state === "done" ? "Done" : item.state === "active" ? "In Progress" : "Upcoming"}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
