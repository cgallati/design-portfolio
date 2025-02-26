import { useEffect, useRef, useState } from 'react';
import { useBreakpoint } from './useBreakpoint';

interface AnimationConfig {
  startOpacity?: number;
  endOpacity?: number;
  translateY?: number;
  duration?: number;
  delay?: number;
  easing?: string;
  threshold?: number;
  once?: boolean;
}

export function useScrollAnimation(config: AnimationConfig = {}) {
    const { breakpoint, isMobile } = useBreakpoint();

  const {
    startOpacity = 0,
    endOpacity = 1,
    translateY = isMobile ? 60 : 120,
    duration = 1000,
    delay = 0,
    easing = 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
    threshold = 0.3,
    once = true,
  } = config;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Apply initial styles immediately on ref assignment
  const assignRef = (element: HTMLDivElement | null) => {
    if (element && !isInitialized) {
      // Prevent flash by setting styles synchronously
      element.style.opacity = startOpacity.toString();
      element.style.transform = `translateY(${translateY}px)`;
      // Add transition after a brief delay to prevent initial animation
      setTimeout(() => {
        element.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
        element.style.transitionDelay = `${delay}ms`;
        element.style.willChange = 'opacity, transform';
        setIsInitialized(true);
      }, 50);
    }
    ref.current = element;
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef || !isInitialized) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldAnimate = entry.isIntersecting && (!once || !hasAnimated);
        
        if (shouldAnimate) {
          setIsVisible(true);
          setHasAnimated(true);
          currentRef.style.opacity = endOpacity.toString();
          currentRef.style.transform = 'translateY(0)';
          
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
          currentRef.style.opacity = startOpacity.toString();
          currentRef.style.transform = `translateY(${translateY}px)`;
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startOpacity, endOpacity, translateY, duration, delay, easing, threshold, once, hasAnimated, isInitialized]);

  return { ref: assignRef, isVisible };
}