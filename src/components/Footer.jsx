import React from "react";
import { Facebook, Linkedin, Twitter, Instagram,Phone, Mail, MapPin  } from "lucide-react";

const Footer = () => {
  const linkStyles =
    "font-['Outfit'] font-light text-[16px] leading-none tracking-normal text-black hover:text-blue-600 transition-colors";
  const footerLinks = {
    features: {
      title: "Features",
      links: [
        "Connected banking",
        "Smart treasury.",
        "Instant payouts",
      ],
    },
      company: {
      title: "Our Company",
      links: [ "About", "Services", "Contact"],
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
      
        <div className="flex flex-1 flex-col md:flex-row flex-wrap justify-between gap-8">
            <div className="flex-1 max-w-[400px]">
                      <h3 className={headerStyles}>Our Mission</h3>
          <p className="font-['Outfit'] font-light text-[16px] leading-[1.5] tracking-normal text-[#4F4F4F] mb-8">
           To eliminate financial friction for Indian businesses by providing unified banking visibility, intelligent treasury management, and seamless payouts all powered by AI that learns and adapts to each business's unique cash flow patterns.
          </p>

          <div className="flex gap-4 items-center">
            <a  className="p-2 text-blue-600 hover:scale-110 transition-transform cursor-pointer">
              <img src="/assets/logo-facebook.svg" alt="facebook"/>
            </a>
            <a  href="https://www.linkedin.com/company/withyobo/" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 hover:scale-110 transition-transform cursor-pointer">
              <img src="/assets/logo-linkedin.svg" alt="Linkedin"/>
            </a>
            <a href="https://x.com/withyobo?s=21" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-400 hover:scale-110 transition-transform cursor-pointer">
              <img src="/assets/logo-twitter.svg" alt="twitter"/>
            </a>
            <a href="https://www.instagram.com/withyobo/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 hover:scale-110 transition-transform cursor-pointer">
              <img src="/assets/logo-instagram-filled.svg" alt="instagram" className="h-8 w-8" />
            </a>
          </div>
        </div>
        
          {/* Features Column */}
          <div>
            <h3 className={headerStyles}>{footerLinks.features.title}</h3>
            <ul className="space-y-4">
              {footerLinks.features.links.map((link) => (
                <li key={link}>
                  <span  className="font-['Outfit'] font-light text-[16px] leading-none tracking-normal text-black">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
            {/* Company Column */}
        <div>
  <h3 className={headerStyles}>Reach Us</h3>
  <ul className="space-y-4">
    <li className="flex items-center gap-3">
      <Phone size={18} className="mt-1 text-[#0D3BFF]" />
      <a href="tel:+919109910995" className={linkStyles}>
        +91 91099 10995
      </a>
    </li>

    <li className="flex items-center gap-3">
      <Mail size={18} className="mt-1 text-[#0D3BFF]" />
      <a href="mailto:info@paywize.in" className={linkStyles}>
        info@yobo.money
      </a>
    </li>

    <li className="flex items-start gap-3">
      <MapPin size={18} className="mt-1 text-[#0D3BFF]" />
    <a
  href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+M.R.+Complex+7th+Cross,+6th+Main+Rd,+BTM+2nd+Stage,+Bengaluru,+Karnataka+560076"
  target="_blank"
  rel="noopener noreferrer"
  className={`${linkStyles} block`}
>
  <span className="block mb-1">
    2nd Floor, M.R. Complex 7th Cross,
  </span>
  <span className="block mb-1">
    6th Main Rd, BTM 2nd Stage,
  </span>
  <span className="block">
    Bengaluru, Karnataka 560076
  </span>
</a>

    </li>
  </ul>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
