'use client';

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import GridDistortion from "./ui/GridDistortion";
import CurvedLoop from "./ui/CurvedLoop";
import RotatingText from "./RotatingText";

export const Landing = () => {
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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
      <div className="absolute h-[50%] inset-0 z-20 flex flex-col justify-end gap-2 md:-mt-10 items-center text-center px-4 text-black">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {["SME", "MSME", "Entrepreneurs", "Freelancers"].map((tag) => (
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
          className="text-3xl md:text-5xl lg:text-8xl font-extrabold text-black flex gap-2 items-center"
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
      <AnimatePresence>
        {open && mounted && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed z-50 inset-0 flex items-center justify-center px-4"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="relative bg-white w-full max-w-md rounded-2xl p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold text-black">
                  Get Early Access 🚀
                </h2>

                <p className="mt-2 text-gray-500">
                  Enter your email to get early invitation!
                </p>

                <form className="mt-6 space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Illustration */}
      {mounted && (
        <div className="absolute bottom-10 left-0 right-0 z-10 pb-8 flex justify-center">
          <motion.img
            src="/assets/cycle.svg"
            alt="cycle"
            className="logo z-10 mt-4 h-[26%] w-[26%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </div>
      )}

      {/* Curved Loop */}
      {mounted && (
        <div className="absolute -bottom-4 left-0 right-0 z-10 pb-8">
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
