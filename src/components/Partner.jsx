'use client';

import React from 'react';

const logos = [
  { id: 1, src: '/assets/sib.svg', alt: 'SIB', className: 'h-8 sm:h-10 md:h-12' },
  { id: 2, src: '/assets/swiggy.svg', alt: 'Swiggy', className: 'h-7 sm:h-9 md:h-10' },
  { id: 3, src: '/assets/zomoto.svg', alt: 'Zomato', className: 'h-6 sm:h-7 md:h-8' },
  { id: 4, src: '/assets/uber.svg', alt: 'Uber', className: 'h-6 sm:h-7 md:h-8' },
];

const PartnerMarquee = () => {
  return (
    <div className="relative w-full bg-black py-4 sm:py-6">
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20 md:w-24 bg-gradient-to-r from-black to-transparent z-10" />

      <div className="flex flex-col sm:flex-row items-center">
        {/* MARQUEE */}
        <div className="relative flex-1 overflow-hidden w-full">
          <div className="marquee-track">
            {[0, 1].map(set =>
              <div key={set} className="marquee-content">
                {logos.map(logo => (
                  <div key={`${set}-${logo.id}`} className="mx-4 sm:mx-6 md:mx-10 flex items-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`${logo.className} w-auto object-contain`}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* STORES LOGO */}
        <div className="relative z-20 px-4 sm:px-10 mt-4 sm:mt-0">
          <img
            src="/assets/stores.svg"
            alt="Stores"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-[0px] sm:right-[140px] md:right-[120px] top-0 h-full w-12 sm:w-20 md:w-24 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export default PartnerMarquee;
