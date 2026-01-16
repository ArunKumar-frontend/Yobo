import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Pockets",
      heading: "Organise your money",
      description: "Whether it's for gadgets and getaways or bills, automatically categorise your cash with Pockets. They're sub-accounts that help you control your spend.",
      buttonText: "Create a Pocket",
      image: "/assets/sliderimg1.svg"
    },
    {
      id: 2,
      title: "Budgets",
      heading: "Track your spending",
      description: "Set monthly budgets for different categories and get real-time insights into your spending habits. Stay on top of your finances with smart alerts.",
      buttonText: "Set Budget",
      image: "/assets/sliderimg2.svg"
    },
    {
      id: 3,
      title: "Analytics",
      heading: "Understand your money",
      description: "Get detailed breakdowns of your spending patterns with interactive charts and insights. Make smarter financial decisions with data.",
      buttonText: "View Analytics",
      image: "/assets/sliderimg3.svg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, slides.length]);

  const handleSlideChange = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      handleSlideChange(index);
    }
  };

  const goToPrevious = () => {
    handleSlideChange((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    handleSlideChange((currentIndex + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="max-w-7xl w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Content Section */}
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <div 
              className={`space-y-6 transition-all duration-500 ease-out ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {/* <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {currentSlide.title}
              </p> */}
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {currentSlide.heading.split(' ')[0]} {currentSlide.heading.split(' ')[1]}<br/>
                 <span className='text-[#0D3BFF]'>
                  {currentSlide.heading.split(' ')[2]}
                  </span>


              </h1>
              
              <p className="text-lg text-[#7A7A7A] leading-relaxed">
                {currentSlide.description}
              </p>
              
              {/* <button className="mt-8 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 inline-block cursor-pointer">
                {currentSlide.buttonText}
              </button> */}
            </div>

            {/* Navigation Controls */}
            <div className="mt-12 flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full cursor-pointer border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full cursor-pointer border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2 ml-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-8 h-2 bg-gray-900'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-96 lg:h-auto overflow-hidden flex items-center gap-4 p-4">
            {/* Current Image (Full size) */}
            <div 
              className={`relative w-3/5 h-full transition-all duration-700 ease-out ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover rounded-3xl "
              />
            </div>

            {/* Next two images stacked */}
            <div className="flex  gap-4 w-2/5 h-full justify-center items-center">
              {/* Next Image */}
              <div 
                className={`relative w-full h-[78%] transition-all duration-700 ease-out ${
                  isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-70 translate-x-0'
                } hover:opacity-90`}
              >
                <img
                  src={slides[(currentIndex + 1) % slides.length].image}
                  alt={slides[(currentIndex + 1) % slides.length].title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Third Image */}
              <div 
                className={`relative w-full h-[48%] transition-all duration-700 ease-out delay-75 ${
                  isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-40 translate-x-0'
                } hover:opacity-60`}
              >
                <img
                  src={slides[(currentIndex + 2) % slides.length].image}
                  alt={slides[(currentIndex + 2) % slides.length].title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;