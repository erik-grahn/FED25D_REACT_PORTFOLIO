const InfoArrow = () => {
  return (
    <div className="sm:text-lg md:text-xl lg:text-2xl">
      <div>
        <p>erik</p>
        <p>grahn</p>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/3 flex w-full items-center lg:basis-3/4 xl:basis-4/5">
          <span className="h-[1px] flex-1 bg-secondary" />
          <div className="relative h-4 w-4 shrink-0">
            <span className="absolute right-79/80 top-1/2 h-[1px] w-2 -translate-y-1/2 rotate-45 origin-right bg-secondary" />
            <span className="absolute right-79/80 top-1/2 h-[1px] w-2 -translate-y-1/2 -rotate-45 origin-right bg-secondary" />
          </div>
        </div>
        <p className="basis-1/3 text-secondary lg:basis-1/4 xl:basis-1/5">
          october 2026
        </p>
      </div>
      <div>
        <p>front-end</p>
        <p>developer</p>
      </div>
    </div>
  );
};

export default InfoArrow;
