import React, { useCallback, useEffect, useRef, useState } from "react";
import { st } from "../styles/styles.js";
import { C } from "../styles/tokens.js";
import { SLIDES, HERO_GRADIENTS } from "../data/content.js";

export default function HeroSlider({ onNavigate }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = SLIDES.length;
  const touchStartX = useRef(null);

  const goTo = useCallback((i) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(t);
  }, [index, paused, goTo]);

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchStartX.current = null;
  };

  const slide = SLIDES[index];

  return (
    <section
      id="home"
      aria-label="Hero slideshow"
      style={st.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div style={st.heroBgLayer}>
        {SLIDES.map((_, i) => (
          <div
            key={i}
            style={{
              ...st.heroBgSlide,
              opacity: i === index ? 1 : 0,
              background: HERO_GRADIENTS[i % HERO_GRADIENTS.length],
            }}
          />
        ))}
        <div style={st.heroNoise} />
      </div>

      <div style={st.heroContent} key={index}>
        <div style={st.slideEyebrow} className="itsi-fade-in">
          <span style={st.eyebrowDot} /> {slide.eyebrow}
        </div>
        <h1 style={st.slideHeading} className="itsi-fade-in-2">
          {slide.heading[0]}
          <br />
          <em style={{ fontStyle: "italic", color: C.blue300 }}>{slide.heading[1]}</em>
        </h1>
        <p style={st.slideDesc} className="itsi-fade-in-3">
          {slide.desc}
        </p>
        <div style={st.slideActions} className="itsi-fade-in-4">
          <a
            href={slide.primary.href}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(slide.primary.href.replace("#", ""));
            }}
            style={st.btnPrimary}
          >
            {slide.primary.label}
          </a>
          <a
            href={slide.secondary.href}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(slide.secondary.href.replace("#", ""));
            }}
            style={st.btnOutlineWhite}
          >
            {slide.secondary.label}
          </a>
        </div>
      </div>

      <button aria-label="Previous slide" onClick={prev} style={{ ...st.sliderArrow, left: 24 }}>
        ←
      </button>
      <button aria-label="Next slide" onClick={next} style={{ ...st.sliderArrow, right: 24 }}>
        →
      </button>

      <div style={st.sliderDots} role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-label={`Slide ${i + 1}`}
            aria-selected={i === index}
            onClick={() => goTo(i)}
            style={{
              ...st.dot,
              width: i === index ? 28 : 9,
              background: i === index ? C.blue400 : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      <div style={st.slideCounter}>
        <span style={{ color: "#fff", fontWeight: 700 }}>{String(index + 1).padStart(2, "0")}</span>
        <span> / {String(total).padStart(2, "0")}</span>
      </div>

      <div style={st.progressTrack}>
        <div
          key={`${index}-${paused}`}
          style={{
            ...st.progressFill,
            animation: paused ? "none" : "itsiProgress 6s linear forwards",
          }}
        />
      </div>
    </section>
  );
}
