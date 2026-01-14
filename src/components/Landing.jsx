import * as React from "react";
import { motion } from "framer-motion";
import GridDistortion from "./ui/GridDistortion";
import CurvedLoop from "./ui/CurvedLoop";

export const Landing = () => {
  return (
    <div className="relative w-full h-screen">
      <GridDistortion
        imageSrc="./assets/video2.mp4"
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className="absolute inset-0 z-0 opacity-50"
      />

      <div className="absolute h-[50%] inset-0 z-20 flex flex-col justify-end gap-2 mt-0 md:-mt-10   items-center text-center px-4 text-black">
        
          <motion.h1
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
          >
            The Business Money OS
          </motion.h1>
          
          <motion.p
            className="mt-4 text-xl text-[#7A7A7A] opacity-80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.5 }}
          >
            Connected banking. Smart treasury. Instant payouts.
          </motion.p>
          
          <motion.button
            className="mt-4 px-8 py-2 md:py-4 bg-black text-white rounded-full font-semibold transition-colors duration-300 inline-block cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        

       
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 pb-8 sm:pb-6 md:pb-8 flex justify-center">
 <motion.img
          src="/assets/cycle.svg"
          alt="cycle"
          className="logo z-10 mt-4"
          initial={{ opacity: 0, scale: 0.8,  }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.9 }}
        />
</div>
      <div className="absolute -bottom-4 left-0 right-0 z-10 pb-8 sm:pb-6 md:pb-8">
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