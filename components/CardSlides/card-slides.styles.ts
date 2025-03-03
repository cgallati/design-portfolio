import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "../../lib/theme/util";
import { responsiveValues } from "../../lib/theme";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  ${responsiveValues("padding", {
    s: "2rem 0",
    m: "2.5rem 0",
    l: "3rem 0",
    xl: "3.5rem 0",
  })};
`;

export const SlidesTrack = styled.div<{ transform: string }>`
  display: flex;
  width: 100%;
  transform: ${({ transform }) => transform};
  transition: transform 0.5s ease-in-out;
`;

export const SlideWrapper = styled.div`
  flex-shrink: 0;
  ${responsiveValues("width", {
    s: "95%",
    m: "85%",
    l: "80%",
    xl: "70%",
  })};
  ${responsiveValues("margin", {
    s: "0 2.5%",
    m: "0 7.5%",
    l: "0 10%",
    xl: "0 15%",
  })};
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  
  ${responsiveValues("min-height", {
    s: "400px",
    m: "450px",
    l: "500px",
    xl: "550px",
  })};

  ${mq[1]} { {
    flex-direction: row;
    
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex: 1;

  ${mq[1]} {
    width: 50%;
  }
`;

export const Title = styled.h3`
  ${responsiveValues("font-size", {
    s: "20px",
    m: "22px",
    l: "24px",
    xl: "26px",
  })}
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

export const Text = styled.div`
  ${responsiveValues("font-size", {
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
  })}
  color: #636363;
  line-height: 1.6;
  white-space: pre-wrap;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 250px;

  ${mq[1]} {
    width: 50%;
    min-height: unset;
  }
`;

export const NavigationButton = styled.button<{ direction: 'prev' | 'next' }>`
  position: absolute;
  z-index: 10;
  ${({ direction }) => direction === 'prev' ? 'left: 1rem;' : 'right: 1rem;'}
  bottom: 50%;
  transform: translateY(50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(50%) scale(1.05);
  }

  &:focus {
    outline: none;
  }

  ${responsiveValues("width", {
    s: "32px",
    m: "36px",
    l: "40px",
    xl: "44px",
  })};

  ${responsiveValues("height", {
    s: "32px",
    m: "36px",
    l: "40px",
    xl: "44px",
  })};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#333' : '#ccc')};
  margin: 0 4px;
  transition: background-color 0.3s ease;
`;
