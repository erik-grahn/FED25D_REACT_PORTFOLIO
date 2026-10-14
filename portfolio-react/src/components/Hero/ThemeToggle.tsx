type ThemeToggleProps = {
  isAlternate: boolean;
  onToggle: () => void;
};

const ThemeToggle = ({ isAlternate, onToggle }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Byt till ${isAlternate ? "ljust" : "mörkt"} tema`}
      aria-pressed={isAlternate}
      className=" relative block h-full w-full cursor-pointer rounded-4xl bg-[#333333] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 ">
      {" "}
      <span
        className={`absolute left-1/2 top-[5%] 
                    aspect-square w-[76%] -translate-x-1/2 rounded-full 
                    bg-secondary transition-transform duration-800 ease-in-out 
                    ${isAlternate ? "translate-y-0" : "translate-y-[160%]"}`}
      />{" "}
    </button>
  );
};

export default ThemeToggle;
