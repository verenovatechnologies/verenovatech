import React, { useEffect, useState } from "react";
import { st } from "../styles/styles.js";
import { C } from "../styles/tokens.js";
import { NAV_LINKS } from "../data/content.js";

export default function Navbar({ active, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => (e) => {
    e.preventDefault();
    onNavigate(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          ...st.nav,
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div style={st.navInner}>
          <a href="#home" onClick={handleClick("home")} style={st.navLogo}>
            <div style={st.logoIcon}>VN</div>
            <span style={st.logoText}>
              Vere<span style={{ color: C.blue600 }}>Nova</span>
            </span>
          </a>

          <nav style={st.navLinksWrap} className="itsi-desktop-nav">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={`#${l.href}`}
                onClick={handleClick(l.href)}
                style={{
                  ...st.navLink,
                  color: active === l.href ? C.navTextActive : C.navText,
                  background: active === l.href ? C.navPillBg : "transparent",
                  fontWeight: active === l.href ? 700 : 500,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            style={st.hamburger}
            className="itsi-hamburger"
          >
            <span style={st.hamLine} />
            <span style={st.hamLine} />
            <span style={st.hamLine} />
          </button>
        </div>
      </header>

      <div
        style={{
          ...st.mobileMenu,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <button aria-label="Close menu" onClick={() => setMenuOpen(false)} style={st.mobileClose}>
          ✕
        </button>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={`#${l.href}`} onClick={handleClick(l.href)} style={st.mobileLink}>
            {l.label}
          </a>
        ))}
      </div>
      {menuOpen && <div onClick={() => setMenuOpen(false)} style={st.mobileOverlay} />}
    </>
  );
}
