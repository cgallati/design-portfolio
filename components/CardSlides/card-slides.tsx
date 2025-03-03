import { FC, useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { TypePrototypeSlides } from "../../contentful/types";
import {
  CarouselContainer,
  SlidesTrack,
  SlideWrapper,
  Slide,
  ContentContainer,
  Title,
  Text,
  ImageContainer,
  NavigationButton,
  PaginationContainer,
  Dot,
} from "./card-slides.styles";
import { ChevronLeft, ChevronRight } from "./icons";
import { getMediaQueryIndex } from "../../lib/theme";

export const CardSlides: FC<TypePrototypeSlides> = ({ fields }) => {
  const { slides = [] } = fields || {};
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [transform, setTransform] = useState("translateX(0%)");
  const [isMediumUp, setIsMediumUp] = useState(false);
  const slideCount = slides?.length || 0;
  const trackRef = useRef<HTMLDivElement>(null);

  // Initialize and track the medium breakpoint
  useEffect(() => {
    const updateBreakpoint = () => {
      setIsMediumUp(getMediaQueryIndex(1));
    };
    
    // Set initial value
    updateBreakpoint();
    
    // Update on resize
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      // Handle the infinite loop by normalizing the index
      let normalizedIndex = index;
      if (index < 0) {
        normalizedIndex = slideCount - 1;
      } else if (index >= slideCount) {
        normalizedIndex = 0;
      }

      setCurrentSlideIndex(normalizedIndex);
      setTransform(`translateX(-${normalizedIndex * 100}%)`);
    },
    [slideCount]
  );

  const handlePrevSlide = useCallback(() => {
    goToSlide(currentSlideIndex - 1);
  }, [currentSlideIndex, goToSlide]);

  const handleNextSlide = useCallback(() => {
    goToSlide(currentSlideIndex + 1);
  }, [currentSlideIndex, goToSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevSlide();
      } else if (e.key === "ArrowRight") {
        handleNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrevSlide, handleNextSlide]);

  // If there are no slides, don't render anything
  if (slideCount === 0) {
    return null;
  }

  return (
    <CarouselContainer>
      <SlidesTrack ref={trackRef} transform={transform}>
        {slides.map((slide, index) => {
          if (!slide || !slide.fields) {
            return <SlideWrapper key={`empty-${index}`}><Slide></Slide></SlideWrapper>;
          }
          const { title, text, image } = slide.fields;
          
          // Skip slides without required content
          if (!image) {
            return null;
          }
          
          return (
            <SlideWrapper key={slide.sys.id || `slide-${index}`}>
              <Slide>
                <ContentContainer>
                  {title && <Title>{title}</Title>}
                  {text && <Text dangerouslySetInnerHTML={{ __html: text }} />}
                </ContentContainer>
                <ImageContainer>
                  {image && image.fields && image.fields.file && (
                    <Image
                      src={"https:" + image.fields.file.url}
                      alt={image.fields.description || title || ""}
                      fill
                      objectFit="contain"
                      objectPosition={isMediumUp ? "right" : "center"}
                    />
                  )}
                </ImageContainer>
              </Slide>
            </SlideWrapper>
          );
        })}
      </SlidesTrack>

      {slideCount > 1 && (
        <>
          <NavigationButton direction="prev" onClick={handlePrevSlide} aria-label="Previous slide">
            <ChevronLeft />
          </NavigationButton>
          <NavigationButton direction="next" onClick={handleNextSlide} aria-label="Next slide">
            <ChevronRight />
          </NavigationButton>
          <PaginationContainer>
            {slides.map((_, index) => (
              <Dot
                key={index}
                active={index === currentSlideIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </PaginationContainer>
        </>
      )}
    </CarouselContainer>
  );
};
