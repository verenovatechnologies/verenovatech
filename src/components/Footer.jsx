import React from "react";
import { st } from "../styles/styles.js";
import { C } from "../styles/tokens.js";

export default function Footer({ onNavigate }) {
  const handleClick = (href) => (e) => {
    e.preventDefault();
    onNavigate(href);
  };
  return (
    <footer style={st.footer}>
      <div style={st.footerTop} className="itsi-footer-top">
        <div style={st.footerBrand}>
          <a href="#home" onClick={handleClick("home")} style={st.navLogo}>
            <div style={st.logoIcon}>VN</div>
            <span style={{ ...st.logoText, color: "white" }}>
              Vere<span style={{ color: C.blue400 }}>Nova</span>
            </span>
          </a>
          <p style={st.footerDesc}>
            A lean IT solutions startup delivering custom software, web platforms, and digital products — built to
            last and grow with your business.
          </p>
        </div>
        <div style={st.footerCol}>
          <h4 style={st.footerH4}>Services</h4>
          <ul style={st.footerUl}>
            <li><a href="#services" onClick={handleClick("services")} style={st.footerA}>Custom Software</a></li>
            <li><a href="#services" onClick={handleClick("services")} style={st.footerA}>Web Development</a></li>
            <li><a href="#services" onClick={handleClick("services")} style={st.footerA}>Mobile Apps</a></li>
            <li><a href="#services" onClick={handleClick("services")} style={st.footerA}>API Development</a></li>
            <li><a href="#services" onClick={handleClick("services")} style={st.footerA}>Cloud & DevOps</a></li>
          </ul>
        </div>
        <div style={st.footerCol}>
          <h4 style={st.footerH4}>Company</h4>
          <ul style={st.footerUl}>
            <li><a href="#about" onClick={handleClick("about")} style={st.footerA}>About Us</a></li>
            <li><a href="#how" onClick={handleClick("how")} style={st.footerA}>How We Work</a></li>
            <li><a href="#testimonials" onClick={handleClick("testimonials")} style={st.footerA}>Client Stories</a></li>
            <li><a href="#contact" onClick={handleClick("contact")} style={st.footerA}>Contact</a></li>
          </ul>
        </div>
        <div style={st.footerCol}>
          <h4 style={st.footerH4}>Contact</h4>
          <ul style={st.footerUl}>
            <li><a href="mailto:support@verenova.tech" style={st.footerA}>support@verenova.tech</a></li>
            <li><a href="tel:+917708767738" style={st.footerA}>+91 7708767738</a></li>
            <li><a href="#" style={st.footerA}>WhatsApp Us</a></li>
            <li><a href="#" style={st.footerA}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div style={st.footerBottom}>
        <p>© 2024 VereNova Technologies. All rights reserved.</p>
        <p>Built with precision. Shipped with pride.</p>
      </div>
    </footer>
  );
}
