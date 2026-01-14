'use client';
import PartnerMarquee from "../components/Partner";
import DomeGallery from "../components/DemoGallery";
import Services from "../components/Services";
import TestimonialSection from "../components/Testimonial";
import Footer from "../components/Footer";
      import ScrollStack from "../components/scroll-stack"
import ContentSlider from "@/components/contentslider";
import { Landing } from "@/components/Landing";

 
 
 
export default function Home() {

 
  return (
    <div className="relative w-full h-screen bg-[#E9EBF4]">
   
     <Landing/>
      <PartnerMarquee />
      <ScrollStack />
      <DomeGallery />
      <ContentSlider />
      <Services />
      {/* <div className="bg-white min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h1 className="text-black text-5xl font-bold leading-tight">
              Card stacks have never<br />looked so good
            </h1>
            <p className="text-xl text-gray-700">
              Just look at it go!
            </p>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center">
            <CardSwap
              width={450}
              height={395}
              cardDistance={50}
              verticalDistance={60}
              delay={3000}
              pauseOnHover={false}
            >
       <Card>
  <div className="flex w-full h-full flex-col">
    <div className="w-full border-b p-3 border-white bg-black rounded-t-xl">
      <h3 className="text-lg font-semibold">Card 1</h3>
    </div>
    <div className="flex-1 flex justify-center items-center bg-black p-0 overflow-hidden rounded-b-xl">
      <video 
        src='./assets/video1.mp4'
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</Card>

             <Card>
  <div className="flex w-full h-full flex-col">
    <div className="w-full border-b p-3 border-white bg-black rounded-t-xl">
      <h3 className="text-lg font-semibold">Card 2</h3>
    </div>
    <div className="flex-1 flex justify-center items-center bg-black p-0 overflow-hidden rounded-b-xl">
      <video 
        src='./assets/video1.mp4'
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</Card>

            <Card>
  <div className="flex w-full h-full flex-col">
    <div className="w-full border-b p-3 border-white bg-black rounded-t-xl">
      <h3 className="text-lg font-semibold">Card 3</h3>
    </div>
    <div className="flex-1 flex justify-center items-center bg-black p-0 overflow-hidden rounded-b-xl">
      <video 
        src='./assets/video1.mp4'
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div> */}
      <TestimonialSection />
      <Footer />
    </div>
  );
}
 
 