'use client';

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import GridDistortion from "./ui/GridDistortion";
import CurvedLoop from "./ui/CurvedLoop";
import RotatingText from "./RotatingText";

export const Landing = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ✅ Background (client-only) */}
      {mounted && (
        <GridDistortion
          imageSrc="./assets/video2.mp4"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="absolute inset-0 z-0 opacity-50"
        />
      )}

      {/* Content */}
      <div className="absolute h-[50%] inset-0 z-20 flex flex-col justify-end gap-2 -mt-10 items-center text-center px-4 text-black">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {["SMEs", "MSMEs", "Entrepreneurs", "Freelancers"].map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm px-3 py-1 rounded-full bg-blue-50 text-[#0D3BFF] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-8xl font-extrabold text-black flex gap-2 items-center"
          initial={mounted ? { opacity: 0, y: 30 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {mounted ? (
            <RotatingText
              texts={['View', 'Move', 'Grow']}
              mainClassName="px-2 md:px-3 text-[#0D3BFF] overflow-hidden rounded-lg"
              rotationInterval={2000}
            />
          ) : (
            <span className="text-[#0D3BFF]">View</span>
          )}
          Money
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-xl text-[#7A7A7A]"
          initial={mounted ? { opacity: 0, y: 30 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Connected banking. Smart treasury. Instant payouts.
        </motion.p>
      </div>

      {/* Modal */}
 

      {/* Bottom Illustration */}
      {mounted && (
      <div className="absolute  bottom-20 md:bottom-10 left-0 right-0 z-10 pb-8 sm:pb-6 md:pb-8 flex justify-center">
          <motion.img
            src="/assets/cycle.svg"
            alt="cycle"
            className="logo z-10 mt-4 h-[76%] w-[76%] sm:h-[56%] sm:w-[56%] md:h-[46%] md:w-[46%] lg:w-[40%] lg:h-[40%] xl:h-[26%] xl:w-[26%] "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </div>
      )}

      {/* Curved Loop */}
      {mounted && (
      <div className="absolute bottom-10 md:-bottom-4 left-0 right-0 z-10 pb-8 sm:pb-6 md:pb-8">
          <CurvedLoop
            marqueeText="Invoices ✦ Payroll ✦ Expenses ✦ Cash Flow ✦ Smart Treasury ✦ Runway ✦ "
            speed={0.8}
            curveAmount={800}
            direction="right"
            interactive
          />
        </div>
      )}
    </div>
  );
};
