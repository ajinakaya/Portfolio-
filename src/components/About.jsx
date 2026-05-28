export default function About() {
  const facts = [
    { icon: "🎓", label: "Education", value: "BSc Hons Computing" },
    { icon: "📍", label: "Location", value: "Nepal" },
    { icon: "💼", label: "Status", value: "Open to Work" },
    { icon: "🌐", label: "Focus", value: "Full Stack Development" },
  ];

  return (
    <section id="about" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <style>{`
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(16px);} to { opacity:1; transform:translateY(0);} }
        .about-card {
          background: #0a1628;
          border: 1px solid #1e3a5f;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .about-card:hover { border-color: #3b82f6; transform: translateY(-3px); }
      `}</style>

      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <span style={{ fontSize: 13, color: "#60a5fa", letterSpacing: "0.12em", textTransform: "uppercase" }}>About Me</span>
        <div style={{ flex: 1, height: 1, background: "#1e3a5f" }} />
      </div>

      <h2 style={{ fontSize: 40, fontWeight: 700, fontFamily: "'Lora', serif", marginBottom: 48, lineHeight: 1.2 }}>
        Who I <span style={{ color: "#60a5fa" }}>Am</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

        {/* Left — text */}
        <div>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.9, marginBottom: 20 }}>
            I'm <strong style={{ color: "#e2e8f0" }}>Ajina Kayastha</strong>, a passionate Full Stack Developer with a BSc Hons in Computing. I love turning ideas into polished, user-friendly web applications — from a sleek UI all the way down to a well-structured backend.
          </p>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.9, marginBottom: 20 }}>
            My journey into tech started with curiosity and grew into a genuine love for clean code, thoughtful design, and solving real-world problems with technology. I enjoy working across the entire stack and am always excited to learn new tools.
          </p>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.9, marginBottom: 32 }}>
            Outside of coding I enjoy exploring UI/UX design principles, contributing to projects, and staying up to date with the latest in web development.
          </p>

          <div style={{ display: "flex", gap: 16 }}>
            <a
              href="/cv.pdf"
              download
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#3b82f6", color: "#fff", textDecoration: "none",
                padding: "12px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600,
                transition: "background 0.2s",
              }}
            >
              📄 Download CV
            </a>
          </div>
        </div>

        {/* Right — fact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {facts.map(({ icon, label, value }) => (
            <div key={label} className="about-card">
              <div style={{
                width: 42, height: 42, borderRadius: 10, background: "rgba(59,130,246,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0,
              }}>{icon}</div>
              <div>
                <p style={{ fontSize: 12, color: "#475569", marginBottom: 3 }}>{label}</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0" }}>{value}</p>
              </div>
            </div>
          ))}

          {/* Timeline snippet */}
          <div style={{
            gridColumn: "1 / -1",
            background: "#0a1628", border: "1px solid #1e3a5f", borderRadius: 12, padding: 20,
          }}>
            <p style={{ fontSize: 12, color: "#475569", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.1em" }}>Timeline</p>
            {[
              { year: "2024", label: "BSc Hons Computing — Graduated" },
              { year: "2023", label: "Final Year Project — Full Stack App" },
              { year: "2022", label: "Internship — Web Developer" },
              { year: "2021", label: "Started University" },
            ].map(({ year, label }) => (
              <div key={year} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 11, color: "#3b82f6", fontWeight: 700, minWidth: 36, fontFamily: "monospace" }}>{year}</span>
                <div style={{ flex: 1, paddingTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", display: "inline-block", marginRight: 8 }} />
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}