import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Highlights = () => {
  useGSAP(() => {
    gsap.to(["#left-column", "#right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section
      id="highlights"
      className="container mx-auto px-6 mt-24 flex-col-center"
    >
      <h2 className="text-white text-3xl md:text-6xl text-center max-w-3xl">
        There’s never been a better time to upgrade.
      </h2>
      <h3 className="text-white text-xl md:text-3xl text-center mt-6">
        Here’s what you get with the new MacBook Pro.
      </h3>
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        <div
          id="left-column"
          className="flex flex-col justify-between gap-6 opacity-0 -translate-y-5"
        >
          <div className="h-full bg-[url(/images/highlight-background.png)] bg-no-repeat bg-cover p-10 rounded-3xl">
            <img src="/images/laptop.png" alt="Laptop" />
            <p className="font-semibold text-xl md:text-3xl max-w-3xs">
              Fly through demanding tasks up to 9.8x faster.
            </p>
          </div>
          <div className="bg-[#1D1D1F] p-10 rounded-3xl flex items-center gap-6">
            <img src="/images/sun.png" alt="Sun" />
            <p className="font-semibold text-xl md:text-3xl">
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>
        <div
          id="right-column"
          className="flex flex-col justify-between gap-6 opacity-0 -translate-y-5"
        >
          <div
            id="apple-gradient"
            className="p-10 rounded-3xl flex items-center gap-6 relative"
          >
            <img src="/images/ai.png" alt="AI" />
            <p className="font-semibold text-xl md:text-3xl">
              Built for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div className="h-full bg-[#1D1D1F] p-10 rounded-3xl">
            <img src="/images/battery.png" alt="Battery" />
            <p className="font-semibold text-xl md:text-3xl max-w-sm">
              Up to
              <span id="green-gradient"> 14 more hours </span>
              battery life.
              <span className="text-dark-100"> (Up to 24 hours total).</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
