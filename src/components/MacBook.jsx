import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { useMacBookStore } from "../store";
import Lights from "./three/Lights";
import MacBookModel from "./models/MacBookModel";

const MacBook = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { color, setColor } = useMacBookStore();

  return (
    <section id="macbook" className="min-h-[80vh] mt-24 relative">
      <h2 className="text-white text-center text-3xl md:text-6xl">
        Take a closer look.
      </h2>
      <div className="absolute z-50 bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex items-center justify-between bg-neutral-800 rounded-full px-6 py-3 gap-3">
          <div
            onClick={() => setColor("#adb5bd")}
            className={clsx(
              "bg-neutral-300 size-6 rounded-full cursor-pointer",
              color === "#adb5bd" && "ring-3 size-3 ring-light"
            )}
          />
          <div
            onClick={() => setColor("#2e2c2e")}
            className={clsx(
              "bg-neutral-900 size-6 rounded-full cursor-pointer",
              color === "#2e2c2e" && "ring-3 size-3 ring-light"
            )}
          />
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 1, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <Lights />
        <PresentationControls
          {...{
            snap: true,
            speed: 1,
            zoom: 1,
            azimuth: [-Infinity, Infinity],
            config: { mass: 1, tension: 0, friction: 26 },
          }}
        >
          <group>
            <MacBookModel
              position={[0, -0.5, 0]}
              scale={isMobile ? 0.05 : 0.08}
            />
          </group>
        </PresentationControls>
      </Canvas>
    </section>
  );
};

export default MacBook;
