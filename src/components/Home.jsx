import { useEffect, useRef } from "react";

const Home = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="home" className="h-screen flex-col-center">
      <div className="md:translate-y-16 xl:translate-y-28">
        <h1 className="text-xl text-white md:text-3xl text-center">
          MacBook Pro
        </h1>
        <img
          className="container mx-auto w-2/3"
          src="/images/title.png"
          alt="Title"
        />
      </div>
      <video
        ref={videoRef}
        src="/videos/macbook.mp4"
        autoPlay
        muted
        playsInline
      />
      <div className="flex-col-center gap-6 md:-translate-y-16 xl:-translate-y-24">
        <button className="py-3 px-6 rounded-full bg-blue text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          Buy
        </button>
        <p className="base-semibold md:large-semibold">
          From $1599 or $133.25/mo. for 12 mo.*
        </p>
      </div>
    </section>
  );
};

export default Home;
