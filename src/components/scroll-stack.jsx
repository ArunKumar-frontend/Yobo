import { useEffect, useRef } from 'react';

const ScrollStack = () => {
  const cardsData = [
  {
    id: 0,
    indexLabel: '(01)',
    title: 'All your accounts.',
    highlight: 'One view.',
    description: 'Every bank. Every balance. Real-time',
    bg: 'bg-white',
    textColor: 'text-[#242A33]',
    highlightColor: 'text-[#0D3BFF]',
    video: './assets/scrollstackimg1.svg',
        image: './assets/scrollstackimg1.svg',
    marginbottomnum:"12vh"
  },
  {
    id: 1,
    indexLabel: '(02)',
    title: 'Idle cash,',
    highlight: 'working harder.',
    description: 'AI-powered FD optimization. Maximize every rupee.',
    bg: 'bg-[#0024B5]',
    textColor: 'text-white',
    highlightColor: 'text-white',
    video: './assets/video1.mp4',
        image: './assets/scrollstackimg2.svg',
        marginbottomnum:"12vh"

  },
  {
    id: 2,
    indexLabel: '(03)',
    title: 'Pay anyone.',
    highlight: 'Instantly.',
    description: 'NEFT. IMPS. RTGS. UPI. One click.',
    bg: 'bg-[#3265FF]',
    textColor: 'text-white',
    highlightColor: 'text-white',
    video: './assets/video1.mp4',
        image: './assets/scrollstackimg3.svg',
        marginbottomnum:""

  }
];

  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardTop = card.offsetTop;
        const stackOffset = 40 + index * 20;
        const progress = scrollTop - (cardTop - stackOffset);
        const targetScale = 0.92;

        if (progress > 0 && progress < windowHeight) {
          const scaleProgress = Math.min(progress / 300, 1);
          const scale = 1 - scaleProgress * (1 - targetScale);

          card.style.position = 'sticky';
          card.style.top = '200px';
          card.style.transform = `scale(${scale})`;
        } else if (progress >= windowHeight) {
          card.style.position = 'sticky';
          card.style.top = '200px';
          card.style.transform = `scale(${targetScale})`;
        } else {
          card.style.position = 'relative';
          card.style.transform = 'scale(1)';
        }

        card.style.zIndex = index;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el, index) => {
    cardsRef.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-[#E9EBF4]">
      <div className="relative pt-[30vh] pb-[10vh] ">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            ref={el => addToRefs(el, index)}
            className={`w-[80%] h-[500px] mx-auto  ${card.bg} rounded-3xl shadow-2xl transform-gpu`}
            style={{ transformOrigin: 'top center' }}
          >
            <div className={`flex ${card.id==0?'justify-start':card.id==1?'justify-center':card.id==2?'justify-end':''} -z-10`}>
            <div className={`${card.bg} w-1/3 h-[50px]  absolute -top-8 rounded-t-2xl`}>
              </div>
              </div>
              
            <div className="flex justify-between items-center h-full p-10 gap-4">
              
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center items-start gap-4">
                <span className={`${card.textColor} font-semibold text-md`}>
                  {card.indexLabel}
                </span>

                <h2 className={`text-5xl font-bold ${card.textColor}`}>
                  {card.title}
                  <span className={`block mt-3 ${card.highlightColor}`}>
                    {card.highlight}
                  </span>
                </h2>

                <p className={`text-md ${card.textColor} opacity-80`}>
                  {card.description}
                </p>
              </div>

              {/* RIGHT VIDEO */}
              <div className="flex justify-center items-center p-2 overflow-hidden rounded-xl z-10">
                {card.image?
                <img
                  src={card.image}
                  
                  alt={card.image}
                  
                  
                  className="w-[80%] h-[80%] object-cover rounded-2xl"
                />
              :
                <video
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                />
                }
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollStack;
