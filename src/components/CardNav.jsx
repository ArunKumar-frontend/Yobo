'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { ChevronRight, Menu, X } from 'lucide-react';
import yobologo from '../../public/assets/logo.svg';

/* ---------------------------------------------
   Isomorphic layout effect (SSR-safe)
---------------------------------------------- */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const CardNav = ({
  logoAlt = 'Logo',
  items = [],
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor = '#000',
  buttonBgColor = '#000',
  buttonTextColor = '#fff'
}) => {
  /* ---------------------------------------------
     STATE
  ---------------------------------------------- */
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  /* ---------------------------------------------
     REFS
  ---------------------------------------------- */
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  /* ---------------------------------------------
     MOUNT FLAG (NO EARLY RETURN ❗)
  ---------------------------------------------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------------------------------------------
     HELPERS
  ---------------------------------------------- */
  const calculateHeight = () => {
    if (!mounted || typeof window === 'undefined') return 60;

    const navEl = navRef.current;
    if (!navEl) return 60;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return 260;

    const contentEl = navEl.querySelector('.card-nav-content');
    if (!contentEl) return 260;

    const prev = {
      visibility: contentEl.style.visibility,
      pointerEvents: contentEl.style.pointerEvents,
      position: contentEl.style.position,
      height: contentEl.style.height
    };

    contentEl.style.visibility = 'visible';
    contentEl.style.pointerEvents = 'auto';
    contentEl.style.position = 'static';
    contentEl.style.height = 'auto';

    contentEl.offsetHeight;
    const height = 60 + contentEl.scrollHeight + 16;

    Object.assign(contentEl.style, prev);
    return height;
  };

  const createTimeline = () => {
    if (!mounted) return null;

    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 40, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease,
        stagger: 0.08
      },
      '-=0.15'
    );

    return tl;
  };

  /* ---------------------------------------------
     GSAP INIT
  ---------------------------------------------- */
  useIsomorphicLayoutEffect(() => {
    if (!mounted) return;

    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [mounted, items, ease]);

  /* ---------------------------------------------
     RESIZE HANDLING
  ---------------------------------------------- */
  useIsomorphicLayoutEffect(() => {
    if (!mounted) return;

    const handleResize = () => {
      if (!tlRef.current || !navRef.current) return;

      if (isExpanded) {
        const h = calculateHeight();
        gsap.set(navRef.current, { height: h });
        tlRef.current.kill();
        const newTl = createTimeline();
        newTl?.progress(1);
        tlRef.current = newTl;
      } else {
        tlRef.current.kill();
        tlRef.current = createTimeline();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mounted, isExpanded]);

  /* ---------------------------------------------
     ACTIONS
  ---------------------------------------------- */
  const toggleMenu = () => {
    if (!mounted || !tlRef.current) return;

    if (!isExpanded) {
      setIsExpanded(true);
      setIsHamburgerOpen(true);
      tlRef.current.play(0);
    } else {
      setIsHamburgerOpen(false);
      tlRef.current.eventCallback('onReverseComplete', () =>
        setIsExpanded(false)
      );
      tlRef.current.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  /* ---------------------------------------------
     RENDER (SAFE)
  ---------------------------------------------- */
  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-5 w-[90%] max-w-[800px] z-[99] ${className}`}
      style={{ visibility: mounted ? 'visible' : 'hidden' }}
    >
      <nav
        ref={navRef}
        className="relative h-[60px] rounded-xl shadow-md overflow-hidden"
        style={{ backgroundColor: baseColor }}
      >
        {/* TOP BAR */}
        <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-4 z-10">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isExpanded}
            style={{ color: menuColor }}
            className='cursor-pointer'
          >
            {isHamburgerOpen ? <X /> : <Menu />}
          </button>

          <img src={yobologo.src} alt={logoAlt} className="h-[28px]" />

          <button
            className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full font-medium cursor-pointer"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started <ChevronRight />
          </button>
        </div>

        {/* CONTENT */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-[12px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
