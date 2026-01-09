

import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    const linkStyles = "font-['Outfit'] font-light text-[16px] leading-none tracking-normal text-black hover:text-blue-600 transition-colors";
  const footerLinks = {
    company: {
      title: "Our Company",
      links: ["Home", "About", "Services", "News", "Contact"]
    },
    services: {
      title: "Services",
      links: ["Market Research", "Market Analysis", "SEO Consultancy", "Page Ranking", "SMM"]
    },
    features: {
      title: "Features",
      links: ["Brand Strategy", "Audience Analytics", "Copywriting", "Team Training", "Email Marketing"]
    }
  };

  // Shared classes based on your requirements
const headerStyles = "font-['Outfit'] font-bold text-[20px] leading-none tracking-normal text-[#000000] mb-6";

  return (
    <footer className="relative w-full py-16 px-6 md:px-20 bg-white overflow-hidden">
      {/* Background Stylized Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none flex justify-center items-center"
        style={{
          backgroundImage: 'url(./assets/yobo-bg.svg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left Section: Info and Socials */}
        <div className="flex-1 max-w-[400px]">
<p className="font-['Outfit'] font-light text-[16px] leading-[1.5] tracking-normal text-[#4F4F4F] mb-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>  
          
          <div className="flex gap-4">
            <a className="p-2 text-blue-600 hover:scale-110 transition-transform">
              <Facebook size={24} fill="currentColor" strokeWidth={0} />
            </a>
            <a className="p-2 text-blue-600 hover:scale-110 transition-transform">
              <Linkedin size={24} fill="currentColor" strokeWidth={0} />
            </a>
            <a className="p-2 text-blue-400 hover:scale-110 transition-transform">
              <Twitter size={24} fill="currentColor" strokeWidth={0} />
            </a>
            <a  className="p-2 text-blue-600 hover:scale-110 transition-transform">
              <Instagram size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Right Section: Navigation Columns */}
        <div className="flex flex-1 flex-wrap justify-between gap-8">
          
          {/* Company Column */}
<div>
  <h3 className={headerStyles}>{footerLinks.company.title}</h3>
  <ul className="space-y-4">
    {footerLinks.company.links.map((link) => (
      <li key={link}>
        <a href="#" className={linkStyles}>{link}</a>
      </li>
    ))}
  </ul>
</div>

          {/* Services Column */}
<div>
  <h3 className={headerStyles}>{footerLinks.services.title}</h3>
  <ul className="space-y-4">
    {footerLinks.services.links.map((link) => (
      <li key={link}>
        <a href="#" className={linkStyles}>{link}</a>
      </li>
    ))}
  </ul>
</div>

          {/* Features Column */}
<div>
  <h3 className={headerStyles}>{footerLinks.features.title}</h3>
  <ul className="space-y-4">
    {footerLinks.features.links.map((link) => (
      <li key={link}>
        <a href="#" className={linkStyles}>{link}</a>
      </li>
    ))}
  </ul>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;