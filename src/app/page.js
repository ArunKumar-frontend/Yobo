'use client';
import { useRef,useLayoutEffect } from "react";
import CardNav from "./lib/CardNav";
import logo from "../../public/assets/logo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PartnerMarquee from "./component/Partner";
import DomeGallery from "./lib/DemoGallery";
import Services from "./component/Services";
import GlassSurface from "@/components/GlassSurface";
import CardSwap, { Card } from "@/components/CardSwap";
import TestimonialSection from "./component/Testimonial";
import Footer from "./component/Footer";
      import ScrollStack, { ScrollStackItem } from "../components/ui/scroll-stack"

 
 
gsap.registerPlugin(ScrollTrigger);
 
export default function Home() {
  const heroRef = useRef(null);
const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];
 
  useLayoutEffect(() => {
    if (!heroRef.current) return;
 
    gsap.to(heroRef.current, {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);
 
  return (
    <div className="relative w-full">
 
      {/* NAV */}
      <CardNav
        imageSrc={logo.src}
        logoAlt="yobo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
      />
 
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center z-10"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            The Business Money OS
          </h1>
          <p className="mt-4 opacity-80">
            Connected banking. Smart treasury. Instant payouts.
          </p>
        </div>
 
   
 

 

      </section>

<ScrollStack>
  <ScrollStackItem>
    <h2>Card 1</h2>
    <p>This is the first card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 2</h2>
    <p>This is the second card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 3</h2>
    <p>This is the third card in the stack</p>
  </ScrollStackItem>
</ScrollStack>
       <PartnerMarquee/>
       <div style={{ width: '100vw', height: '100vh' }}>

              <Services/>
     <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h1 className="text-white text-5xl font-bold leading-tight">
              Card stacks have never<br />looked so good
            </h1>
            <p className="text-xl text-gray-300">
              Just look at it go!
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            <CardSwap
              width={450}
              height={380}
              cardDistance={50}
              verticalDistance={60}
              delay={3000}
              pauseOnHover={true}
              skewAmount={4}
            >
              <Card>
                <div className="flex w-full h-full flex-col">
                  <div className="w-full border-b p-3 border-white bg-black">
                    <h3 className="text-lg font-semibold">Card 1</h3>
                  </div>
                  <div className="flex-1 flex justify-center items-center bg-white p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" 
                      alt="Mountain landscape" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex w-full h-full flex-col">
                  <div className="w-full border-b p-3 border-white bg-black">
                    <h3 className="text-lg font-semibold">Card 2</h3>
                  </div>
                  <div className="flex-1 flex justify-center items-center bg-white p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop" 
                      alt="Forest scene" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex w-full h-full flex-col">
                  <div className="w-full border-b p-3 border-white bg-black">
                    <h3 className="text-lg font-semibold">Card 3</h3>
                  </div>
                  <div className="flex-1 flex justify-center items-center bg-white p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop" 
                      alt="Misty mountains" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
     <DomeGallery />
     <TestimonialSection/>
     <Footer />
    </div>

    </div>
  );
}
 
 