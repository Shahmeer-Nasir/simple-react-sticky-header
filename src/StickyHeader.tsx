import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './StickyHeader.css';

type StickyHeaderProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onHeaderHeightChange?: (height: number) => void;
  addScrollClassesOnBody?: boolean
  addScrollClassesOnHeader?: boolean
};

const StickyHeader: React.FC<StickyHeaderProps> = ({ 
  children, 
  className="", 
  style,
  onHeaderHeightChange,
  addScrollClassesOnBody=true,
  addScrollClassesOnHeader=true,
}) => {
  
  // const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isScrollingDown = currentScrollY > lastScrollY.current;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const scrollDirectionClass = isScrollingUp
        ? 'scrolling-up'
        : isScrollingDown
        ? 'scrolling-down'
        : '';

      // Update <body> classes on scroll
      if (addScrollClassesOnBody) {
        document.body.classList.remove('scrolling-up', 'scrolling-down');
        if (scrollDirectionClass) {
          document.body.classList.add(scrollDirectionClass);
        }
      }
      
      // Update header classes using ref
      if (headerRef.current && addScrollClassesOnHeader) {
        headerRef.current.classList.remove('scrolling-up', 'scrolling-down');
        if (scrollDirectionClass) {
          headerRef.current.classList.add(scrollDirectionClass);
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Set the height of the header
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight
        document.documentElement.style.setProperty('--header-height', `${height}px`);
        onHeaderHeightChange?.(height);
      }
    }

    // Debounce utility
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateHeaderHeight();
      }, 200); // 200ms debounce delay
    };

    const timeoutId = setTimeout(() => {updateHeaderHeight()}, 300); // Initial height measurement
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [onHeaderHeightChange])

  
  return (
    <header
      ref={headerRef}
      className={`simple-react-sticky-header${className ? ` ${className}` : ''}`}
      style={{...style}}
    >
      {children}
    </header>
  );
};

export default StickyHeader;
