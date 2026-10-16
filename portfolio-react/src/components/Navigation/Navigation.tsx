import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="justify-self-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "close menu" : "open menu"}
          aria-expanded={isOpen}
          className="fixed top-4 right-4 z-50 h-10 w-10">
          <span className="absolute left-1/2 top-2 h-0.5 w-7 -translate-x-1/2 bg-primary" />
          <span className="absolute left-1/2 top-1/2 h-0.5 w-7 -translate-x-1/2 -translate-y-1/2 bg-primary" />
          <span className="absolute bottom-2 left-1/2 h-0.5 w-7 -translate-x-1/2 bg-primary" />
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
