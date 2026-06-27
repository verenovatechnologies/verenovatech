import React, { useState } from "react";
import { st } from "../styles/styles.js";
import { Reveal } from "../hooks/useReveal.jsx";

function FormField({ label, error, children }) {
  return (
    <div style={st.fgroup}>
      <label style={st.flabel}>{label}</label>
      {children}
      {error && <span style={st.ferror}>{error}</span>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    type: "",
    brief: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.fname.trim()) e.fname = "First name is required";
    if (!form.lname.trim()) e.lname = "Last name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.type) e.type = "Please select a project type";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ fname: "", lname: "", email: "", phone: "", type: "", brief: "" });
    }
  };

  return (
    <section id="contact" style={st.sectionPad}>
      <div style={st.contactWrap} className="itsi-grid-2">
        <Reveal>
          <span style={st.label}>Get In Touch</span>
          <h2 style={st.title}>
            Let's build something
            <br />
            <span style={st.italic}>great together.</span>
          </h2>
          <p style={st.sub}>
            Have a project in mind? Drop us a message and we'll get back to you within one business day with a free
            consultation — no obligation.
          </p>

          <div style={{ marginTop: 24 }}>
            <div style={st.cinfo}>
              <div style={st.cinfoIcon}>📍</div>
              <div>
                <label style={st.cinfoLabel}>Location</label>
                <p style={st.cinfoText}>29  palaniyappa Nagar 3rd Street, Nanjikottai road, thanjavur-613001</p>
              </div>
            </div>
            <div style={st.cinfo}>
              <div style={st.cinfoIcon}>📧</div>
              <div>
                <label style={st.cinfoLabel}>Email</label>
                <p style={st.cinfoText}>verenovatechnologies@gmail.com</p>
              </div>
            </div>
            <div style={st.cinfo}>
              <div style={st.cinfoIcon}>📞</div>
              <div>
                <label style={st.cinfoLabel}>Phone / WhatsApp</label>
                <p style={st.cinfoText}>+91 8610295217</p>
                 <p style={st.cinfoText}>+91 9361647718</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} style={st.contactForm}>
          <div style={st.formTitle}>Tell us about your project</div>
          <div style={st.formSub}>Free consultation · We respond within 1 business day</div>

          <form noValidate onSubmit={handleSubmit}>
            <div style={st.formRow} className="itsi-form-row">
              <FormField label="First Name" error={errors.fname}>
                <input style={st.input(!!errors.fname)} placeholder="Arjun" value={form.fname} onChange={update("fname")} />
              </FormField>
              <FormField label="Last Name" error={errors.lname}>
                <input style={st.input(!!errors.lname)} placeholder="Mehta" value={form.lname} onChange={update("lname")} />
              </FormField>
            </div>

            <FormField label="Email Address" error={errors.email}>
              <input style={st.input(!!errors.email)} placeholder="arjun@company.com" value={form.email} onChange={update("email")} />
            </FormField>

            <FormField label="Phone / WhatsApp">
              <input style={st.input(false)} placeholder="+91 7708767738" value={form.phone} onChange={update("phone")} />
            </FormField>

            <FormField label="Type of Project" error={errors.type}>
              <select style={st.input(!!errors.type)} value={form.type} onChange={update("type")}>
                <option value="">Select project type...</option>
                <option>Custom Software Development</option>
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>API / Backend Development</option>
                <option>Cloud & DevOps Setup</option>
                <option>Not sure — need advice</option>
              </select>
            </FormField>

            <FormField label="Project Brief">
              <textarea
                style={{ ...st.input(false), minHeight: 100, resize: "vertical" }}
                placeholder="Tell us what you're building, your timeline, and any technical requirements you have in mind..."
                value={form.brief}
                onChange={update("brief")}
              />
            </FormField>

            <button type="submit" style={st.formBtn}>
              Send Project Brief →
            </button>

            {submitted && (
              <div style={st.toast}>✓ Thanks! Your brief has been sent — we'll be in touch within 1 business day.</div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
