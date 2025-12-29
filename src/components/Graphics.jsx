import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { performanceImages, performanceImagePositions } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Graphics = () => {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        "#text",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: "#text",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile) return;

      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImagePositions.forEach(
        ({ id, left, right, bottom, transform }) => {
          if (id === "p-5") return;

          const vars = {};

          if (typeof left === "number") vars.left = `${left}%`;
          if (typeof right === "number") vars.right = `${right}%`;
          if (typeof bottom === "number") vars.bottom = `${bottom}%`;

          if (transform) vars.transform = transform;

          tl.to(`#${id}`, vars, 0);
        }
      );
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section
      ref={sectionRef}
      id="graphics"
      className="container mx-auto px-6 mt-24 flex-col-center relative overflow-hidden"
    >
      <h2 className="text-3xl md:text-6xl text-white max-w-3xl text-center">
        Next-level graphics performance. Game on.
      </h2>
      <div className="w-6xl h-[40vh] md:h-screen relative">
        {performanceImages.map(({ src, id }) => (
          <img
            key={id}
            src={src}
            alt={id}
            id={id}
            className="max-w-40 md:max-w-110 object-cover object-center"
          />
        ))}
      </div>
      <div className="max-w-xl mt-6">
        <p id="text" className="base-semibold md:large-semibold text-center">
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Graphics;
