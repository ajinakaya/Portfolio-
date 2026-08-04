import React from "react";

export default function About() {
  const facts = [
    { icon: "🎓", label: "Education", value: "BSc Hons Computing" },
    { icon: "📍", label: "Location", value: "Nepal" },
    { icon: "💼", label: "Status", value: "Open to Work" },
    { icon: "🌐", label: "Focus", value: "Full Stack Development" },
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-6 md:px-12 max-w-6xl mx-auto bg-background text-text font-grotesk"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-accent tracking-widest uppercase font-grotesk">
          About Me
        </span>
        <div className="flex-1 h-px bg-surface-alt" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold font-lora mb-12 text-text">
        Who I <span className="text-accent">Am</span>
      </h2>

      {/* Main Grid: Left Paragraphs & Right Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column — Text & Action Button */}
        <div className="space-y-5 text-muted text-base leading-relaxed">
          <p>
            I'm <strong className="text-text font-semibold">Ajina Kayastha</strong>, a passionate Full Stack Developer with a BSc Hons in Computing. I love turning ideas into polished, user-friendly web applications — from a sleek UI all the way down to a well-structured backend.
          </p>
          <p>
            My journey into tech started with curiosity and grew into a genuine love for clean code, thoughtful design, and solving real-world problems with technology. I enjoy working across the entire stack and am always excited to learn new tools.
          </p>
          <p className="pb-3">
            Outside of coding, I enjoy exploring UI/UX design principles, contributing to open project ideas, and staying up to date with modern web technologies.
          </p>

          <div>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-accent-btn hover:bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent-btn/20 active:translate-y-0"
            >
              📄 Download CV
            </a>
          </div>
        </div>

        {/* Right Column — Fact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {facts.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-surface border border-surface-alt rounded-xl p-5 flex items-start gap-3.5 transition-all duration-200 hover:border-accent hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-xl shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-xs text-muted/80 mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-text">{value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}