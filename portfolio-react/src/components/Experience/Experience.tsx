const Experience = () => {
  return (
    <section className="w-full bg-background2 py-16" id="experience">
      <div className="content-padding">
        <h2 className="h2 text-primary pb-0">
          02<span className="text-alternate">.</span>experience
        </h2>
        <div className="grid grid-cols-2">
          <div className="row-start-1 md:row-span-2 p-4">
            <img
              src="/tomorrowland.webp"
              className="rounded-3xl w-full max-w-[380px] pb-8"
              alt=""
            />
          </div>
          <p className="col-start-2 row-start-1 self-center p-4 pt-12 sm:text-lg md:text-xl md:pb-8 lg:text-2xl xl:text-3xl md:pb-8">
            my unique background includes working in the music-industry as a
            songwriter and producer, having my music being played on the worlds
            biggest stages.
          </p>
          <div
            className="pl-4 col-span-2 row-start-2 
              md:col-span-1 md:col-start-2
              ">
            <h5 className="text-lg font-medium italic underline sm:text-2xl md:text-3xl xl:text-4xl">
              highlights
            </h5>
            <ul className="list-disc pt-4 px-5 sm:text-lg md:text-xl md:pb-8 lg:text-2xl xl:text-3xl">
              <li>over 40 million streams on spotify</li>
              <li>contestant in swedens “melodifestivalen”</li>
              <li>previous member of the swedish golf national team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
