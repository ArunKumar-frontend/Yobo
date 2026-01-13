import * as React from "react";
import GridDistortion from "./ui/GridDistortion";
import CurvedLoop from "./ui/CurvedLoop";

export const Landing = () => {
  return (
    <div className="relative w-full h-screen ">
      <GridDistortion
        imageSrc="./assets/video2.mp4"
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className="absolute inset-0 z-0 opacity-50"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-start mt-40 gap-20 items-center text-center px-4 text-black">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-black">
            The Business Money OS
          </h1>
          <p className="mt-4 text-xl text-[#7A7A7A] opacity-80">
            Connected banking. Smart treasury. Instant payouts.
          </p>
          <button className="mt-4 px-8 py-4 bg-black text-white rounded-full font-semibold  transition-colors duration-300 inline-block cursor-pointer">
                Get Started
              </button>
        </div>

        <img src="/assets/cycle.svg" alt="cycle" className="logo z-10" />
      </div>

      <div className="absolute -bottom-4 left-0 right-0 z-20 pb-8 sm:pb-6 md:pb-8">
        <CurvedLoop
          marqueeText="Netflix ✦ food ✦ Parking ✦ BBPS ✦ Expenses ✦ SIB ✦ "
          speed={0.8}
          curveAmount={800}
          direction="right"
          interactive
        />
      </div>
    </div>
  );
};
