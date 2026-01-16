import React from "react";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const linkStyles =
    "font-['Outfit'] font-light text-[16px] leading-none tracking-normal text-black hover:text-blue-600 transition-colors";
  const footerLinks = {
    company: {
      title: "Our Company",
      links: [ "About", "Services", "Contact"],
    },
    features: {
      title: "Features",
      links: [
        "Connected banking",
        "Smart treasury.",
        "Instant payouts",
      ],
    },
  };

  // Shared classes based on your requirements
  const headerStyles =
    "font-['Outfit'] font-bold text-[20px] leading-none tracking-normal text-[#000000] mb-6";

  return (
    <footer className="relative w-full py-16 px-6 md:px-20 bg-white overflow-hidden">
      {/* Background Stylized Image */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none flex justify-center items-center"
        style={{
          backgroundImage: "url(./assets/yobo-bg.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      
        <div className="flex flex-1 flex-col-reverse md:flex-row flex-wrap justify-between gap-8">
            <div className="flex-1 max-w-[400px]">
                      <h3 className={headerStyles}>Our Mission</h3>
          <p className="font-['Outfit'] font-light text-[16px] leading-[1.5] tracking-normal text-[#4F4F4F] mb-8">
           To eliminate financial friction for Indian businesses by providing unified banking visibility, intelligent treasury management, and seamless payouts — all powered by AI that learns and adapts to each business's unique cash flow patterns.
          </p>

          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 hover:scale-110 transition-transform cursor-pointer">
              <Facebook size={24} fill="currentColor" strokeWidth={0} />
            </a>
            <a  href="https://www.linkedin.com/company/withyobo/" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 hover:scale-110 transition-transform cursor-pointer">
              <Linkedin size={24} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-400 hover:scale-110 transition-transform cursor-pointer">
              <Twitter size={24} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://www.instagram.com/withyobo/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 hover:scale-110 transition-transform cursor-pointer">
              <Instagram size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
          {/* Company Column */}
          <div>
            <h3 className={headerStyles}>{footerLinks.company.title}</h3>
            <ul className="space-y-4">
              {footerLinks.company.links.map((link) => (
                <li key={link}>
                  <a href="#" className={linkStyles}>
                    {link}
                  </a>
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
                  <a href="#" className={linkStyles}>
                    {link}
                  </a>
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
