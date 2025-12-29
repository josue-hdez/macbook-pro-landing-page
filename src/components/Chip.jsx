const Chip = () => {
  return (
    <section id="chip" className="space-y-24 mt-24">
      <div className="relative md:overflow-hidden">
        <video
          className="w-full object-cover object-center"
          src="/videos/game.mp4"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className="h-full absolute top-0 left-0">
          <img className="h-full scale-150" src="/images/mask.svg" alt="Mask" />
        </div>
      </div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center gap-12">
        <div className="md:max-w-md space-y-9">
          <h2 className="text-3xl md:text-6xl text-white">Rocket Chip</h2>
          <div className="space-y-3 base-semibold md:large-semibold">
            <p>
              Introducing
              <span className="text-white">
                {" "}
                M4, the next generation of Apple silicon
              </span>
              . M4 powers
            </p>
            <p>
              It drives Apple Intelligence on iPad Pro, so you can write,
              create, and accomplish more with ease. All in a design that’s
              unbelievably thin, light, and powerful.
            </p>
            <p>
              A brand-new display engine delivers breathtaking precision, color
              accuracy, and brightness. And a next-gen GPU with
              hardware-accelerated ray tracing brings console-level graphics to
              your fingertips.
            </p>
            <p className="text-blue">Learn more about Apple Intelligence</p>
          </div>
        </div>
        <div className="max-w-3xs space-y-9 base-semibold md:large-semibold">
          <div className="space-y-1">
            <p>Up to</p>
            <h3 className="text-2xl md:text-5xl text-white">4x faster</h3>
            <p>pro rendering performance than M2</p>
          </div>
          <div className="space-y-1">
            <p>Up to</p>
            <h3 className="text-2xl md:text-5xl text-white">1.5x faster</h3>
            <p>CPU performance than M2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chip;
