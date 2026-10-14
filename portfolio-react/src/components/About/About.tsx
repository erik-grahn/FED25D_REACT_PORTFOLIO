const About = () => {
  return (
    <section className="py-16">
      <div className="content-padding">
        <h2 className="h2 text-primary">
          01<span className="text-secondary">.</span>about
        </h2>
        <div className="grid grid-cols-2">
          <div>
            <h5 className="pb-6 md:pb-8">
              <span className="italic text-2xl sm:text-3xl md:text-4xl">
                hi, it's
              </span>
              <span className="font-medium text-xl sm:text-4xl md:text-5xl">
                {" "}
                me!
              </span>
            </h5>
            <p className="pb-4 sm:text-lg md:text-xl md:pb-8">
              i’m a <span className="italic font-medium">creative </span>
              professional
              <span className="italic font-medium"> passionate</span> about
              transforming ideas into{" "}
              <span className="italic font-medium"> intuitive</span> and
              compelling experiences.
            </p>
            <p className="text-lg md:pb-4 font-medium italic underline sm:text-2xl md:text-3xl">
              core expertice
            </p>
            <ul className="list-disc pl-5 sm:text-lg md:text-xl">
              <li>design</li>
              <li>creativity</li>
              <li>efficiency</li>
              <li>user experience</li>
            </ul>
          </div>
          <img
            className="w-full max-w-[380px] rounded-3xl"
            src="../public/erik-hs.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
