const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack shopping platform with user authentication, product management, cart, and payment integration. Built with React, Node.js, and MySQL.",
    tags: ["React", "Node.js", "MySQL", "Express"],
    icon: "🛒",
    color: "#3b82f6",
    github: "#",
    live: "#",
    status: "Completed",
  },
  {
    title: "Task Management App",
    description: "Kanban-style project management tool with drag & drop, real-time updates, and team collaboration features.",
    tags: ["React", "TypeScript", "Firebase"],
    icon: "📋",
    color: "#22c55e",
    github: "#",
    live: "#",
    status: "Completed",
  },
  {
    title: "Student Portal System",
    description: "University portal for managing student records, course enrollment, grades and timetables. Final year project.",
    tags: ["PHP", "MySQL", "Bootstrap", "JS"],
    icon: "🎓",
    color: "#f59e0b",
    github: "#",
    live: null,
    status: "Final Year Project",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app using OpenWeather API with 7-day forecast, interactive charts, and location search.",
    tags: ["React", "REST API", "Chart.js"],
    icon: "🌤️",
    color: "#a78bfa",
    github: "#",
    live: "#",
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <style>{`
        .project-card {
          background: #0a1628;
          border: 1px solid #1e3a5f;
          border-radius: 14px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color 0.2s, transform 0.2s;
          height: 100%;
        }
        .project-card:hover { border-color: #3b82f6; transform: translateY(-4px); }
        .project-link {
          display: inline-flex; align-items: center; gap: 6px;
          background: none; border: 1px solid #1e3a5f;
          color: #94a3b8; padding: 7px 14px; border-radius: 8px;
          font-size: 12px; font-weight: 500; cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .project-link:hover { border-color: #3b82f6; color: #60a5fa; }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 13, color: "#60a5fa", letterSpacing: "0.12em", textTransform: "uppercase" }}>My Work</span>
          <div style={{ flex: 1, height: 1, background: "#1e3a5f" }} />
        </div>
        <h2 style={{ fontSize: 40, fontWeight: 700, fontFamily: "'Lora', serif", marginBottom: 16, lineHeight: 1.2 }}>
          Featured <span style={{ color: "#60a5fa" }}>Projects</span>
        </h2>
        <p style={{ fontSize: 15, color: "#64748b", marginBottom: 56, maxWidth: 500 }}>
          A selection of projects I've built — from university work to personal experiments.
        </p>

        {/* Project grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {PROJECTS.map((project) => (
            <div key={project.title} className="project-card">
              {/* Icon + status */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: `${project.color}18`, border: `1px solid ${project.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
                }}>{project.icon}</div>
                <span style={{
                  fontSize: 11, color: "#22c55e", background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.2)", padding: "3px 10px", borderRadius: 20,
                  fontWeight: 500,
                }}>{project.status}</span>
              </div>

              {/* Title + description */}
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>{project.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{project.description}</p>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 11, background: "#0f2744", border: "1px solid #1e3a5f",
                    color: "#60a5fa", padding: "3px 10px", borderRadius: 12, fontFamily: "monospace",
                  }}>{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                <a href={project.github} className="project-link">⬡ GitHub</a>
                {project.live && <a href={project.live} className="project-link">↗ Live Demo</a>}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ fontSize: 14, color: "#475569", marginBottom: 16 }}>Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", border: "1.5px solid #1e3a5f",
              color: "#60a5fa", padding: "12px 28px", borderRadius: 8,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "border-color 0.2s",
            }}
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}