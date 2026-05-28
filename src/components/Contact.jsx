import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g. EmailJS, Formspree, etc.)
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    { icon: "✉️", label: "Email", value: "ajina@example.com", href: "mailto:ajina@example.com" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ajina", href: "https://linkedin.com" },
    { icon: "🐙", label: "GitHub", value: "github.com/ajina", href: "https://github.com" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "rgba(10,18,32,0.5)" }}>
      <style>{`
        .contact-input {
          width: 100%; background: #0a1628; border: 1px solid #1e3a5f;
          color: #e2e8f0; padding: 12px 16px; border-radius: 8px;
          font-size: 14px; outline: none; font-family: 'DM Sans', sans-serif;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .contact-input:focus { border-color: #3b82f6; }
        .contact-input::placeholder { color: #475569; }
        .contact-info-card {
          display: flex; align-items: center; gap: 14px;
          background: #0a1628; border: 1px solid #1e3a5f;
          border-radius: 12px; padding: 16px 20px;
          text-decoration: none;
          transition: border-color 0.2s, transform 0.2s;
        }
        .contact-info-card:hover { border-color: #3b82f6; transform: translateX(4px); }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 13, color: "#60a5fa", letterSpacing: "0.12em", textTransform: "uppercase" }}>Contact</span>
          <div style={{ flex: 1, height: 1, background: "#1e3a5f" }} />
        </div>
        <h2 style={{ fontSize: 40, fontWeight: 700, fontFamily: "'Lora', serif", marginBottom: 16, lineHeight: 1.2 }}>
          Get In <span style={{ color: "#60a5fa" }}>Touch</span>
        </h2>
        <p style={{ fontSize: 15, color: "#64748b", marginBottom: 56, maxWidth: 500 }}>
          I'm currently open to new opportunities. Whether you have a project, a question, or just want to say hi — my inbox is always open.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

          {/* Left — contact info */}
          <div>
            <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.8, marginBottom: 36 }}>
              I'm looking for exciting Full Stack roles where I can contribute, grow, and continue building great things. If you think we'd be a good fit, I'd love to hear from you!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {contacts.map(({ icon, label, value, href }) => (
                <a key={label} href={href} className="contact-info-card" target="_blank" rel="noopener noreferrer">
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, background: "rgba(59,130,246,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <p style={{ fontSize: 11, color: "#475569", marginBottom: 2 }}>{label}</p>
                    <p style={{ fontSize: 14, color: "#60a5fa", fontWeight: 500 }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div style={{
              marginTop: 32, display: "flex", alignItems: "center", gap: 10,
              background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 10, padding: "12px 18px", width: "fit-content",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ fontSize: 13, color: "#86efac", fontWeight: 500 }}>Available for new opportunities</span>
            </div>
          </div>

          {/* Right — contact form */}
          <div style={{
            background: "#0a1628", border: "1px solid #1e3a5f",
            borderRadius: 16, padding: 32,
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <p style={{ fontSize: 18, fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>Message Sent!</p>
                <p style={{ fontSize: 14, color: "#64748b" }}>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ fontSize: 12, color: "#64748b", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Name</label>
                  <input
                    className="contact-input"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: "#64748b", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Email</label>
                  <input
                    className="contact-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: "#64748b", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Message</label>
                  <textarea
                    className="contact-input"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", padding: 14 }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 80, paddingTop: 32, borderTop: "1px solid #1e3a5f" }}>
          <p style={{ fontSize: 13, color: "#475569" }}>
            Designed & Built by <span style={{ color: "#60a5fa" }}>Ajina Kayastha</span> · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}