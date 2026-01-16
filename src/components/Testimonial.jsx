'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Ashwin J',
    role: 'Head of Compliance, VaultPay',
    text:
      'We had too many people touching too many things. With Paywize, we finally have clear role-based access.',
    image: '/assets/testimonial-img.svg'
  },
  {
    name: 'Sarah Chen',
    role: 'CFO, TechStart Inc',
    text:
      'Paywize transformed our financial workflows. The real-time tracking saves hours every week.',
    image: '/assets/testimonial2-img.svg'
  },
  {
    name: 'Michael Brown',
    role: 'Finance Director, GlobalCorp',
    text:
      'A solution that scales with our business. Audit trails and compliance are spot on.',
    image: '/assets/testimonial-img.svg'
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* Marquee */}
      <div className="relative mb-20">
        <div className="testimonial-marquee gap-4">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[500px] p-4 bg-[#F8F9FA] border border-[#E4E4EC] rounded-2xl"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-xl text-[#121212]">
                    {item.name}
                  </h4>
                  <p className="text-sm font-semibold text-[#475569]">
                    {item.role}
                  </p>
                  <p className="text-sm text-[#475569]">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl p-12 text-white bg-blue-600">
          <img
            src="/assets/bgblue.svg"
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
          <img
            src="/assets/2nd-layerbg.svg"
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-[30px] md:text-[54px] font-semibold mb-6 leading-none">
              Ready to take control of your finances?
            </h2>
            <p className="text-lg mb-10">
              Track, categorize, and analyze your spending in real time.
            </p>

            
            <div className="flex items-center gap-2 bg-white rounded-full p-2 w-full max-w-xl mx-auto">
  <input
    type="email"
    placeholder="Enter your email..."
    className="flex-1 min-w-0 px-4 sm:px-6 py-3 text-[#404C58] outline-none rounded-full text-sm sm:text-base"
  />

  <button className="bg-[#767DFF] px-4 sm:px-8 py-3 rounded-full font-bold text-white whitespace-nowrap text-sm sm:text-base">
    Get Started
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
