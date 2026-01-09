// import React from 'react';
// import testimonialimg from "../../../public/assets/testimonial-img.svg"
// // // Replace the paths below with your actual image imports
// // import blueBackground from "REPLACE_WITH_BLUE_IMAGE_PATH";
// // import topBackground from "REPLACE_WITH_TOP_IMAGE_PATH";

// const TestimonialSection = () => {
//   const testimonials = [
//     {
//       name: "Ashwin J",
//       role: "Head of Compliance, VaultPay",
//       text: "We had too many people touching too many things. With Paywize, we finally have clear role-based access. Maker/checker flows, logs, everything is traceable",
//       image: './assets/testimonial-img.svg'
//     },
//     {
//       name: "Ashwin J",
//       role: "Head of Compliance, VaultPay",
//       text: "We had too many people touching too many things. With Paywize, we finally have clear role-based access. Maker/checker flows, logs, everything is traceable",
//       image: './assets/testimonial-img.svg'
//     },
//     {
//       name: "Ashwin J",
//       role: "Head of Compliance, VaultPay",
//       text: "We had too many people touching too many things. With Paywize, we finally have clear role-based access. Maker/checker flows, logs, everything is traceable",
//       image: './assets/testimonial-img.svg'
//     }
//   ];

//   return (
//     <section className="bg-white py-16 font-sans overflow-hidden">
      
//       {/* Testimonials Grid - Spread to edges */}
//       <div className="flex flex-col md:flex-row w-full gap-4 mb-20">
//         {testimonials.map((item, index) => (
//           <div 
//             key={index} 
//             className="flex-1 p-10 bg-[#F8F9FA] border border-[#E4E4EC] rounded-2xl transition-all duration-300"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <img 
//                 src={item?.image}
//                 alt={item?.name} 
//                 className="w-14 h-14 rounded-full object-cover border border-gray-200"
//               />
//               <div>
//                 <h4 className="text-[#121212] font-bold text-xl leading-tight">{item.name}</h4>
//                 <p className="text-[#475569] text-sm font-medium mt-1">{item.role}</p>
//               </div>
//             </div>
//             <p className="text-[#475569] text-base leading-relaxed">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* CTA Blue Banner - Kept in center */}
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="relative overflow-hidden rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl bg-blue-600">
          
//           {/* Layered Background Images */}
//           <img src='./assets/bgblue.svg' alt="" className="absolute inset-0 w-full h-full object-cover" />
//           <img src='./assets/2nd-layerbg.svg' alt="" className="absolute inset-0 w-full h-full object-cover" />
          
//           {/* Decorative Circles (Background) */}
//           <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>

//           <div className="relative z-10 max-w-2xl mx-auto">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
//               Ready to take control of your finances?
//             </h2>
//             <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium">
//               Track, categorize, and analyze your spending in real time—whether you’re managing personal finances or business budgets.
//             </p>

//             {/* Email Input Group */}
//             <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-full p-2 max-w-lg mx-auto shadow-lg">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email..." 
//                 className="w-full bg-transparent px-6 py-3 text-gray-800 outline-none placeholder:text-gray-400"
//               />
//               <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors whitespace-nowrap">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default TestimonialSection;

import React from 'react';
import testimonialimg from "../../../public/assets/testimonial-img.svg"

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ashwin J",
      role: "Head of Compliance, VaultPay",
      text: "We had too many people touching too many things. With Paywize, we finally have clear role-based access. Maker/checker flows, logs, everything is traceable",
      image: './assets/testimonial-img.svg'
    },
    {
      name: "Ashwin J",
      role: "Head of Compliance, VaultPay",
      text: "We had too many people touching too many things. With Paywize, we finally have clear role-based access. Maker/checker flows, logs, everything is traceable",
      image: './assets/testimonial-img.svg'
    },
    {
      name: "Ashwin J",
      role: "Head of Compliance, VaultPay",
      text: "We had too many people touching too many things. With Paywize, we finally have clear role-based access. Maker/checker flows, logs, everything is traceable",
      image: './assets/testimonial-img.svg'
    }
  ];

  return (
    <section className="bg-white py-16 font-sans overflow-hidden">
      
      {/* Testimonials Grid - Spread to edges */}
      <div className="flex flex-col md:flex-row w-full gap-4 mb-20">
        {testimonials.map((item, index) => (
          <div 
            key={index} 
            className="flex-1 p-10 bg-[#F8F9FA] border border-[#E4E4EC] rounded-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={item?.image}
                alt={item?.name} 
                className="w-14 h-14 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h4 className="text-[#121212] font-bold text-xl leading-tight">{item.name}</h4>
                <p className="text-[#475569] text-sm font-medium mt-1">{item.role}</p>
              </div>
            </div>
            <p className="text-[#475569] text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Blue Banner - Kept in center */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl bg-blue-600">
          
          {/* Layered Background Images */}
          <img src='./assets/bgblue.svg' alt="" className="absolute inset-0 w-full h-full object-cover" />
          <img src='./assets/2nd-layerbg.svg' alt="" className="absolute inset-0 w-full h-full object-cover" />
          
          {/* Decorative Circles (Background) */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Ready to take control... Heading */}
            <h2 className="font-sora font-semibold text-[54px] leading-[100%] tracking-[-0.04em] text-white text-center mb-6">
              Ready to take control of your finances?
            </h2>
            
            {/* Track, categorize, and analyze... Paragraph */}
            <p className="font-sora font-normal text-[20px] leading-[30px] tracking-normal text-white text-center mb-10 align-middle">
              Track, categorize, and analyze your spending in real time—whether you’re managing personal finances or business budgets.
            </p>

            {/* Email Input Group */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-full p-2 max-w-lg mx-auto shadow-lg">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-transparent px-6 py-3 font-worksans font-normal text-[18px] leading-[100%] text-[#404C58] placeholder:text-[#404C58] outline-none align-middle"
              />
              {/* Get Started Button */}
              <button className="cursor-pointer w-full sm:w-auto bg-[#767DFF] hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition-colors whitespace-nowrap">
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