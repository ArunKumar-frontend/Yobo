"use client";
import { useMotionValue } from "motion/react";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "motion/react";
import { cn } from "./utils";

export const EvervaultCard = ({
  text,
  className
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(8500);
    setRandomString(str);
  }, []);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(6500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0.5  bg-[#0026B6] aspect-square   flex items-center justify-center w-full h-full relative ",
        className
      )}>
      <div
        onMouseMove={onMouseMove}
        className="group/card  w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 h-full flex items-center justify-center ">
          <div
            className="relative h-full w-full p-10  flex flex-col gap-4 items-center justify-center text-white font-bold text-4xl">
            {/* <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full " /> */}
              <div className="flex flex-col justify-center items-center gap-2">
     <span className="dark:text-white text-white z-20">

              <span className="text-[#FFCA00]">AI-Powered </span>Investment Advice
            </span>
            <span className="text-lg  text-[#99A7E1] z-20">Let AI put your money to work.</span>
              </div> 
 <img
                src='./assets/service1.svg'
                alt='payout'
                className={` w-full object-contain z-10`}
              />
          </div>

        </div>

      </div>
    </div>
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString
}) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none h-full">
      <div
        className="absolute inset-0   [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0  bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style} />
      <motion.div
        className="absolute inset-0  opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}>
        <p
          className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
