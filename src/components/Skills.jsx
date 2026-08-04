const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    lineColor: "bg-[#378ADD]/40",
    tags: [
      { label: "React",      icon: "ti-brand-react" },
      { label: "TypeScript", icon: "ti-brand-typescript" },
      { label: "HTML & CSS", icon: "ti-brand-html5" },
      { label: "Tailwind",   icon: "ti-wind" },
    ],
    bg: "bg-[#E6F1FB]", border: "border-[#B5D4F4]", text: "text-[#0C447C]",
  },
  {
    category: "Backend",
    lineColor: "bg-[#1D9E75]/40",
    tags: [
      { label: "Node.js",    icon: "ti-brand-nodejs" },
      { label: "Express.js", icon: "ti-server-2" },
      { label: "REST APIs",  icon: "ti-api" },
      { label: "PHP",        icon: "ti-brand-php" },
    ],
    bg: "bg-[#E1F5EE]", border: "border-[#9FE1CB]", text: "text-[#085041]",
  },
  {
    category: "Database",
    lineColor: "bg-[#7F77DD]/40",
    tags: [
      { label: "MySQL",      icon: "ti-database" },
      { label: "MongoDB",    icon: "ti-leaf" },
      { label: "PostgreSQL", icon: "ti-database" },
      { label: "Firebase",   icon: "ti-brand-firebase" },
    ],
    bg: "bg-[#EEEDFE]", border: "border-[#CECBF6]", text: "text-[#26215C]",
  },
  {
    category: "Tools",
    lineColor: "bg-[#BA7517]/40",
    tags: [
      { label: "Git",     icon: "ti-brand-git" },
      { label: "Docker",  icon: "ti-brand-docker" },
      { label: "Figma",   icon: "ti-brand-figma" },
      { label: "VS Code", icon: "ti-code" },
    ],
    bg: "bg-[#FAEEDA]", border: "border-[#FAC775]", text: "text-[#412402]",
  },
];

const FAMILIAR = [
  "Next.js", "Redux", "Jest", "Sass",
  "Linux", "Postman", "Jira", "Agile / Scrum",
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>

      {/* ── Section label ── */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm tracking-widest uppercase text-[var(--color-accent)]">
          My Skills
        </span>
        <div className="flex-1 h-px bg-[var(--color-surface-alt)]" />
      </div>

      {/* ── Two-column layout ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72, alignItems: "start" }}>

        {/* ── LEFT — heading, paragraph, familiar ── */}
        <div>
          <h2
            className="text-[var(--color-text)]"
            style={{ fontSize: 40, fontWeight: 700, fontFamily: "'Lora', serif", lineHeight: 1.2, marginBottom: 20 }}
          >
            Tech <span className="text-[var(--color-accent)]">Stack</span>
          </h2>

          <p
            className="text-[var(--color-muted)]"
            style={{ fontSize: 16, lineHeight: 1.9, marginBottom: 40 }}
          >
            Over the course of my degree and personal projects, I've built up a solid foundation
            across the full stack — from crafting responsive UIs in React to designing RESTful APIs
            and managing relational databases. I enjoy picking the right tool for the job and I'm
            always looking to add new ones to my belt.
          </p>

          {/* ── Divider ── */}
          <div className="h-px bg-[var(--color-surface-alt)] mb-8" />

          {/* ── Also familiar with ── */}
          <p
            className="text-[var(--color-muted)] uppercase tracking-widest mb-5"
            style={{ fontSize: 12 }}
          >
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-3">
            {FAMILIAR.map((tech) => (
              <span
                key={tech}
                className="rounded-full cursor-default border border-[var(--color-surface-alt)] text-[var(--color-muted)] hover:border-[var(--color-accent-btn)] hover:text-[var(--color-accent)] transition-all duration-150"
                style={{ fontSize: 13, padding: "7px 18px" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT — grouped tag rows ── */}
        <div className="flex flex-col gap-8">
          {SKILL_CATEGORIES.map(({ category, lineColor, tags, bg, border, text }) => (
            <div key={category}>

              {/* Category label + accent line */}
              <div className="flex items-center gap-4 mb-4">
                <p
                  className="text-[var(--color-muted)] uppercase tracking-widest flex-shrink-0"
                  style={{ fontSize: 12 }}
                >
                  {category}
                </p>
                <div className={`h-px flex-1 rounded-full ${lineColor}`} />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {tags.map(({ label, icon }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-2 font-medium rounded-full border cursor-default hover:-translate-y-0.5 transition-transform duration-150 ${bg} ${border} ${text}`}
                    style={{ fontSize: 14, padding: "8px 20px" }}
                  >
                    <i className={`ti ${icon}`} style={{ fontSize: 16 }} aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}