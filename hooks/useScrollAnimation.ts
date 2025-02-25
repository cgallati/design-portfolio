import { useEffect, useRef, useState } from 'react';

// Define the animation configuration options
interface AnimationConfig {
  startOpacity?: number;
  endOpacity?: number;
  translateY?: number;
  duration?: number;
  delay?: number;
  easing?: string;
  threshold?: number; // Percentage of element that needs to be visible
  once?: boolean; // Whether the animation should play only once
}

export function useScrollAnimation(config: AnimationConfig = {}) {
  const {
    startOpacity = 0,
    endOpacity = 1,
    translateY = 30,
    duration = 1000,
    delay = 0,
    easing = 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
    threshold = 0.3,
    once = true,
  } = config;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Apply initial styles
    currentRef.style.opacity = startOpacity.toString();
    currentRef.style.transform = `translateY(${translateY}px)`;
    currentRef.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
    currentRef.style.transitionDelay = `${delay}ms`;
    currentRef.style.willChange = 'opacity, transform';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, [startOpacity, endOpacity, translateY, duration, delay, easing, threshold, once]);

  return { ref, isVisible };
}