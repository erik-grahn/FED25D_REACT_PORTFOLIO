const Experience = () => {
  return (
    <section className="w-full bg-background2 py-16">
      <div className="content-padding">
        <h2 className="h2 text-primary">
          02<span className="text-alternate">.</span>experience
        </h2>
        <div className="grid grid-cols-2">
          <div className="row-start-1 md:row-span-2 p-4">
            <img
              src="../public/tomorrowland.png"
              className="w-full max-w-[380px] rounded-3xl"
              alt=""
            />
          </div>
          <p className="col-start-2 row-start-1 self-center p-4 sm:text-lg md:text-xl md:pb-8">
            my unique background includes working in the music-industry as a
            songwriter and producer, having my music being played on the worlds
            biggest stages.
          </p>
          <ul
            className="col-span-2 row-start-2 mx-auto 
              md:col-span-1 md:col-start-2
              md:mx-0 md:w-full list-disc pt-8 px-5  sm:text-lg md:text-xl">
            <li>over 40 million streams on spotify</li>
            <li>contestant in swedens “melodifestivalen”</li>
            <li>previous member of the swedish golf national team</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
