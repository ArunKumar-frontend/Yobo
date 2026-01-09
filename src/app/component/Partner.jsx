import React from 'react';

const PartnerMarquee = () => {
  // Replace these paths with your actual local image paths
  const logos = [
    { src: './assets/primo.png', alt: 'Award Badge', class: 'h-12' },
    { src: './assets/swiggy.png', alt: '6 Crore Trust', class: 'h-10' },
    { src: '/assets/swiggy.png', alt: 'South Indian Bank', class: 'h-8' },
    { src: '/assets/swiggy.png', alt: 'Swiggy', class: 'h-8' },
    { src: '/assets/swiggy.png', alt: 'Fino Payments Bank', class: 'h-7' },

  ];

  return (
    <div className="w-full bg-black py-6 overflow-hidden">
      <div className="relative flex">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        {/* Marquee content - duplicated for seamless loop */}
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 sm:mx-8 md:mx-10 lg:mx-12 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.class} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnerMarquee;