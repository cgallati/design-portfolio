import React, { useRef, useEffect, useState } from 'react';
import { TypePercentageSectionFields } from '../../contentful/types';
import { Entry } from 'contentful';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {
  PercentageSectionContainer,
  DialContainer,
  PercentageCircleSVG,
  PercentageCircle,
  PercentageValue,
  BlurbContainer,
  Blurb
} from './percentage-section.styles';

export const PercentageSection: React.FC<Entry<TypePercentageSectionFields>> = ({ fields }) => {
  const { percentage, blurb } = fields;
  const [circleLength, setCircleLength] = useState(0);
  const [dashOffset, setDashOffset] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  
  // Refs for scroll animations
  const containerRef = useScrollAnimation({ translateY: 50 });
  const blurbRef = useScrollAnimation({ translateY: 40, delay: 0.2 });
  
  // Calculate circle length and adjust dash offset based on percentage
  useEffect(() => {
    if (circleRef.current) {
      const length = circleRef.current.getTotalLength();
      setCircleLength(length);
      // Set initial offset to full circumference (no visible stroke)
      setDashOffset(length);
    }
  }, []);

  // Handle intersection observation for circular animation
  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Calculate dash offset based on percentage (0% = full circle length, 100% = 0)
            const newOffset = circleLength * (1 - percentage / 100);
            setTimeout(() => {
              setDashOffset(newOffset);
            }, 200); // Small delay for better visual effect
            
            observer.unobserve(circle);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(circle);
    return () => {
      if (circle) observer.unobserve(circle);
    };
  }, [percentage, circleLength]);

  const radius = 45; // SVG circle radius
  const circumference = 2 * Math.PI * radius;

  return (
    <PercentageSectionContainer ref={containerRef.ref}>
      <DialContainer>
        <PercentageCircleSVG viewBox="0 0 100 100">
          {/* Percentage circle (animated) - no background circle */}
          <PercentageCircle
            ref={circleRef}
            cx="50"
            cy="50"
            r={radius}
            percentage={percentage}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </PercentageCircleSVG>
        <PercentageValue>{percentage}%</PercentageValue>
      </DialContainer>
      
      <BlurbContainer>
        <Blurb ref={blurbRef}>{blurb}</Blurb>
      </BlurbContainer>
    </PercentageSectionContainer>
  );
};