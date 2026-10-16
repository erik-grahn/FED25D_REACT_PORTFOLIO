import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="home">
      <nav className="justify-self-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "close menu" : "open menu"}
          aria-expanded={isOpen}
          className="fixed top-4 right-4 z-50 h-10 w-10">
          <span
            className={`absolute left-1/2 h-0.5 w-7 -translate-x-1/2 bg-primary
              transition-all duration-300 
              ${isOpen ? "rotate-45" : "top-2"}`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-7 -translate-x-1/2 -translate-y-1/2 bg-primary
              transition-all duration-300
              ${isOpen ? "opacity-0" : "opacity-100"}     
           `}
          />
          <span
            className={`absolute left-1/2 h-0.5 w-7 -translate-x-1/2 bg-primary
              transition-all duration-300 
              ${isOpen ? "-rotate-45" : "bottom-2"}`}
          />
        </button>
        {isOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-background">
            <ul className="flex flex-col items-center gap-8 text-3xl font-bold">
              <li>
                <a href="#home" onClick={() => setIsOpen(false)}>
                  home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  about
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => setIsOpen(false)}>
                  experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
