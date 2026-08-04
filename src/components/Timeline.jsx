const TIMELINE = [
  {
    year: "2025",
    title: "Full Stack Developer — Now",
    description:
      "After graduating, I shifted my full focus to full stack development — building personal projects, deepening my skills in React and Node.js, and actively seeking exciting opportunities to grow as a developer.",
    badge: "Present",
    badgeIcon: "ti-rocket",
    badgeBg: "bg-[#E6F1FB]",
    badgeText: "text-[#0C447C]",
    dotColor: "bg-[#378ADD]",
    borderColor: "hover:border-[#378ADD]/60",
  },
  {
    year: "2024",
    title: "BSc Hons Computing — Graduated",
    description:
      "Completed my degree with honours. Final year project was a full-stack web application built with React, Node.js, and MySQL.",
    badge: "Degree",
    badgeIcon: "ti-school",
    badgeBg: "bg-[#EEEDFE]",
    badgeText: "text-[#26215C]",
    dotColor: "bg-[#7F77DD]",
    borderColor: "hover:border-[#7F77DD]/60",
  },
  {
    year: "2023",
    title: "UI/UX Design Internship",
    description:
      "Interned as a UI/UX designer — created wireframes, prototypes, and user flows in Figma. Worked closely with developers to deliver polished, user-centred interfaces for real products.",
    badge: "Internship",
    badgeIcon: "ti-brush",
    badgeBg: "bg-[#E1F5EE]",
    badgeText: "text-[#085041]",
    dotColor: "bg-[#1D9E75]",
    borderColor: "hover:border-[#1D9E75]/60",
  },
  {
    year: "2021",
    title: "Started University",
    description:
      "Began BSc Hons Computing. Discovered a love for building things on the web — from designing interfaces to writing clean, functional code.",
    badge: "Start",
    badgeIcon: "ti-star",
    badgeBg: "bg-[#FAEEDA]",
    badgeText: "text-[#412402]",
    dotColor: "bg-[#BA7517]",
    borderColor: "hover:border-[#BA7517]/60",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>

      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm tracking-widest uppercase text-[var(--color-accent)]">
          My Journey
        </span>
        <div className="flex-1 h-px bg-[var(--color-surface-alt)]" />
      </div>

      {/* ── Two-column layout ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 72, alignItems: "start" }}>

        {/* ── LEFT — heading + description ── */}
        <div style={{ paddingTop: 4 }}>
          <h2
            className="text-[var(--color-text)]"
            style={{ fontSize: 40, fontWeight: 700, fontFamily: "'Lora', serif", lineHeight: 1.2, marginBottom: 20 }}
          >
            My <span className="text-[var(--color-accent)]">Timeline</span>
          </h2>
          <p
            className="text-[var(--color-muted)]"
            style={{ fontSize: 16, lineHeight: 1.9, marginBottom: 32 }}
          >
            A look at the key milestones that shaped my journey as a developer — from my first day
            at university to graduating with honours and gaining real-world experience.
          </p>

          {/* Quick stat strip */}
          <div className="flex flex-col gap-5">
            {[
              { icon: "ti-calendar",  label: "Years of study",    value: "3 Years" },
              { icon: "ti-code",      label: "Projects built",     value: "4+ Projects" },
              { icon: "ti-brush",     label: "Design internship",  value: "UI/UX Design" },
              { icon: "ti-award",     label: "Graduation",         value: "BSc Hons" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center flex-shrink-0 rounded-xl bg-[var(--color-surface)] border border-[var(--color-surface-alt)]"
                  style={{ width: 42, height: 42 }}
                >
                  <i className={`ti ${icon} text-[var(--color-accent)]`} style={{ fontSize: 18 }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[var(--color-muted)]" style={{ fontSize: 12 }}>{label}</p>
                  <p className="text-[var(--color-text)] font-semibold" style={{ fontSize: 15 }}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — timeline entries ── */}
        <div className="flex flex-col" style={{ paddingTop: 8 }}>
          {TIMELINE.map(({ year, title, description, badge, badgeIcon, badgeBg, badgeText, dotColor, borderColor }, i) => (
            <div key={year} className="flex gap-5">

              {/* Dot + connector line */}
              <div className="flex flex-col items-center" style={{ width: 40, flexShrink: 0 }}>
                {/* Year label */}
                <span
                  className="text-[var(--color-accent)] font-mono font-bold whitespace-nowrap"
                  style={{ fontSize: 12, marginBottom: 6 }}
                >
                  {year}
                </span>
                {/* Dot */}
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${dotColor}`} />
                {/* Line */}
                {i < TIMELINE.length - 1 && (
                  <div
                    className="bg-[var(--color-surface-alt)] mt-1"
                    style={{ width: 1.5, flex: 1, minHeight: 32 }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className={`flex-1 bg-[var(--color-surface)] border border-[var(--color-surface-alt)] rounded-2xl transition-all duration-300 hover:-translate-y-0.5 ${borderColor}`}
                style={{ padding: "20px 24px", marginBottom: 20 }}
              >
                <p
                  className="text-[var(--color-text)] font-semibold"
                  style={{ fontSize: 16, marginBottom: 8 }}
                >
                  {title}
                </p>
                <p
                  className="text-[var(--color-muted)]"
                  style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}
                >
                  {description}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 font-medium rounded-full ${badgeBg} ${badgeText}`}
                  style={{ fontSize: 12, padding: "4px 12px" }}
                >
                  <i className={`ti ${badgeIcon}`} style={{ fontSize: 13 }} aria-hidden="true" />
                  {badge}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}