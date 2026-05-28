import { useState, useEffect } from "react";

const NAV_LINKS = ["about", "skills", "timeline", "projects", "contact"];

export default function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = ["hero", ...NAV_LINKS];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (section) => {
    scrollTo(section);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-999 h-16 px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-surface-alt shadow-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo / Brand Name */}
      <button
        onClick={() => handleNav("hero")}
        className="bg-transparent border-none cursor-pointer flex items-center"
      >
        <span className="text-2xl font-bold text-text font-lora tracking-wide">
          Ajina<span className="text-accent">.</span>
        </span>
      </button>

      {/* Desktop Links + Hire Me Button */}
      <div className="hidden sm:flex items-center gap-2 md:gap-4">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => handleNav(link)}
            className={`relative bg-transparent border-none text-sm font-medium cursor-pointer px-3 py-1.5 capitalize font-grotesk tracking-wide transition-colors duration-200 hover:text-text group ${
              active === link ? "text-accent" : "text-muted"
            }`}
          >
            {link}
            {/* Underline Indicator */}
            <span
              className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent rounded-full transition-transform duration-200 ease-out origin-center ${
                active === link ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </button>
        ))}

        {/* Balanced Hire Me Button */}
        <button
          onClick={() => handleNav("contact")}
          className="ml-2 bg-gradient-to-br from-accent-btn to-blue-700 text-white border-none px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer font-grotesk tracking-wide transition-all duration-200 shadow-sm hover:opacity-95 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent-btn/15 active:translate-y-0"
        >
          Hire Me ✦
        </button>
      </div>

      {/* Hamburger Menu Icon - Mobile */}
      <button
        className="flex flex-col gap-1.2 sm:hidden bg-transparent border-none cursor-pointer p-1.5 z-999"
        onClick={() => setMenuOpen((p) => !p)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-muted rounded-xs transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-1.7" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-muted rounded-xs transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-muted rounded-xs transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-1.7" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu - Mobile */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 z-998 flex flex-col gap-1 bg-background/96 border-b border-surface-alt px-6 py-4 shadow-xl backdrop-blur-md animate-fade-slide sm:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`bg-transparent border-none text-left text-base font-semibold cursor-pointer px-3 py-2.5 rounded-lg capitalize font-grotesk tracking-wide transition-all duration-200 ${
                active === link
                  ? "text-accent bg-accent/8"
                  : "text-muted hover:text-accent hover:bg-accent/4"
              }`}
            >
              {link}
            </button>
          ))}

          <button
            onClick={() => handleNav("contact")}
            className="w-full mt-2 bg-gradient-to-br from-accent-btn to-blue-700 text-white border-none py-3 rounded-lg text-sm font-semibold cursor-pointer font-grotesk tracking-wide shadow-sm"
          >
            Hire Me ✦
          </button>
        </div>
      )}
    </nav>
  );
}