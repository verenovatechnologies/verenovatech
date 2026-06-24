import React from "react";
import { st } from "../styles/styles.js";
import { TRUST_ITEMS } from "../data/content.js";

export default function TrustBar() {
  return (
    <div style={st.trustBar}>
      <div style={st.trustTrack} className="itsi-marquee">
        {[...TRUST_ITEMS, ...TRUST_ITEMS].map((t, i) => (
          <div key={i} style={st.trustItem}>
            <span style={{ marginRight: 8 }}>{t.icon}</span>
            {t.text}
          </div>
        ))}
      </div>
    </div>
  );
}
