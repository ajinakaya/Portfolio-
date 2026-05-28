import { useState, useEffect, useRef } from "react";
import ajinaImage from "../assets/profile1.png";

export default function Hero({ scrollTo }) {
  const terminalLines = [
    "const developer = 'Ajina Kayastha';",
    "npm run build",
    "SELECT * FROM projects;",
    "git commit -m 'ship it 🚀'",
  ];

  const [terminalVisible, setTerminalVisible] = useState([]);
  const termLineIndex = useRef(0);

  useEffect(() => {
    let t;

    const addLine = () => {
      if (termLineIndex.current < terminalLines.length) {
        setTerminalVisible((prev) => [
          ...prev,
          terminalLines[termLineIndex.current],
        ]);

        termLineIndex.current++;
        t = setTimeout(addLine, 1200);
      } else {
        t = setTimeout(() => {
          setTerminalVisible([]);
          termLineIndex.current = 0;
          t = setTimeout(addLine, 600);
        }, 2000);
      }
    };

    t = setTimeout(addLine, 800);

    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_70%_50%,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="animate-fade-slide">
          <span className="text-xs tracking-widest uppercase text-blue-400 mb-4 block">
            👋 Welcome to my portfolio
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-100 font-serif">
            Hi, I'm <span className="text-blue-400">Ajina</span>
            <br />
            Kayastha
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-200">
            Full Stack Developer
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
            Passionate about building modern, scalable, and user-focused web
            applications using React, Node.js, and clean frontend design.
          </p>

          {/* Terminal */}
          <div className="mt-6 bg-[#0a1220] border border-[#1e3a5f] rounded-xl p-4 font-mono text-sm shadow-lg">
            {/* header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-[10px] text-slate-500 ml-2">
                terminal
              </span>
            </div>

            {terminalVisible.map((line, i) => (
              <div
                key={i}
                className="flex items-center gap-2 mb-1 animate-fade-slide"
              >
                <span className="text-green-400">$</span>
                <span className="text-green-200">{line}</span>

                {i === terminalVisible.length - 1 && (
                  <span className="animate-blink text-blue-400">▋</span>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button
              onClick={() => scrollTo("projects")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="border border-slate-700 text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            {[
              ["BSc Hons", "Computing"],
              ["Full Stack", "Developer"],
              ["UI/UX", "Designer"],
            ].map(([a, b]) => (
              <div key={a}>
                <p className="text-blue-400 text-xl font-bold">{a}</p>
                <p className="text-xs text-slate-500">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative w-[300px] md:w-[340px] h-[420px]">

    {/* Floating image — no frame */}
    <img
      src={ajinaImage}
      alt="Ajina Kayastha"
      className="w-full h-full object-cover rounded-[28px] animate-float"
    />

    {/* Subtle bottom glow */}
    <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

    {/* Badge: Open to work */}
    <div className="absolute top-5 right-[-24px] flex items-center gap-2 bg-[#0a1220]/85 border border-blue-500/20 backdrop-blur-sm rounded-xl px-3 py-2">
      <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] shrink-0" />
      <span className="text-xs text-green-100 font-medium whitespace-nowrap">Open to work</span>
    </div>

    {/* Badge: Tech stack */}
    <div className="absolute bottom-[90px] left-[-36px] flex flex-col gap-1.5 bg-[#0a1220]/85 border border-blue-500/20 backdrop-blur-sm rounded-xl px-3 py-2.5">
      <span className="text-[10px] text-slate-500 uppercase tracking-wider">Stack</span>
      <div className="flex gap-1.5 flex-wrap">
        <span className="text-[11px] px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-300 font-semibold">React</span>
        <span className="text-[11px] px-2 py-0.5 rounded-md bg-green-500/15 text-green-300 font-semibold">Node.js</span>
        <span className="text-[11px] px-2 py-0.5 rounded-md bg-sky-500/12 text-sky-300 font-semibold">JavaScript</span>
      </div>
    </div>

    {/* Badge: Projects count */}
    <div className="absolute bottom-5 right-[-2px] flex flex-col gap-0.5 bg-[#0a1220]/85 border border-blue-500/20 backdrop-blur-sm rounded-xl px-3 py-2.5">
      <span className="text-[22px] font-bold text-blue-400 leading-none">10+</span>
      <span className="text-[11px] text-slate-500">Projects</span>
    </div>

          </div>
        </div>
      </div>
    </section>
  );
}