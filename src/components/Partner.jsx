'use client';

import React from 'react';

const logos = [
  { id: 1, src: '/assets/sib.svg', alt: 'SIB', className: 'h-12' },
  { id: 2, src: '/assets/swiggy.svg', alt: 'Swiggy', className: 'h-10' },
  { id: 3, src: '/assets/zomoto.svg', alt: 'Zomato', className: 'h-8' },
  { id: 4, src: '/assets/uber.svg', alt: 'Uber', className: 'h-8' },
];

const PartnerMarquee = () => {
  return (
    
    <div className="relative w-full bg-black py-6 ">
      
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />

      {/* CONTENT */}
      <div className="flex items-center">
        
        {/* MARQUEE AREA */}
        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-track">
            {/* FIRST SET */}
            <div className="marquee-content">
              {logos.map((logo) => (
                <div key={logo.id} className="mx-10 flex items-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.className} w-auto object-contain`}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* DUPLICATE SET */}
            <div className="marquee-content">
              {logos.map((logo) => (
                <div key={`dup-${logo.id}`} className="mx-10 flex items-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.className} w-auto object-contain`}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FIXED STORES LOGO */}
        <div className="relative z-20 px-10">
          <img
            src="/assets/stores.svg"
            alt="Stores"
            className="h-10 w-auto object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* RIGHT FADE BEFORE STORE */}
      <div className="pointer-events-none absolute right-[120px] top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export default PartnerMarquee;
