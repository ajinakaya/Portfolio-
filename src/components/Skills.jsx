import { useState } from "react";

// Categorized skills data - update these with your actual tech stack!
const SKILLS_DATA = [
  {
    category: "Frontend",
    items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Next.js"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express", "PHP", "Laravel", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & Architecture",
    items: ["Git & GitHub", "RESTful APIs", "Postman", "MVC Architecture", "Windows DevEnv"],
  },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-12 bg-background text-text font-grotesk selection:bg-accent/20"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-lora tracking-wide">
            My Skills<span className="text-accent">.</span>
          </h2>
          <p className="text-muted text-sm md:text-base mt-2 max-w-md">
            A look at the core technologies, frameworks, and tools I use to build complete, responsive applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_DATA.map((cat, catIdx) => (
            <div 
              key={cat.category}
              className="bg-surface border border-surface-alt rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-text mb-4 border-b border-surface-alt pb-2 font-lora">
                {cat.category}
              </h3>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => {
                  const uniqueKey = `${catIdx}-${skill}`;
                  const isHovered = hoveredIndex === uniqueKey;
                  
                  return (
                    <span
                      key={skill}
                      onMouseEnter={() => setHoveredIndex(uniqueKey)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="text-sm font-medium text-muted bg-surface-alt/40 border border-surface-alt px-3 py-1.5 rounded-lg transition-all duration-200 cursor-default capitalize hover:text-accent hover:border-accent/40 hover:bg-accent/5"
                      style={{
                        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}