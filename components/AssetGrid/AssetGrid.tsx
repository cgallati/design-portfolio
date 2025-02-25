import React from 'react';
import Image from 'next/image';
import {
  AssetGridContainer,
  RowContainer,
  ColumnContainer,
  FullWidthImageWrapper,
  TallImageWrapper,
} from "./asset-grid.styles";
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ImageFields {
  file: {
    url: string;
    details: {
      image: {
        width: number;
        height: number;
      };
    };
  };
  description: string;
}

interface AssetGridProps {
  images: ImageFields[];
}

export const AssetGrid: React.FC<AssetGridProps> = ({ images }) => {
  const {ref: ref1} = useScrollAnimation();
  const {ref: ref2} = useScrollAnimation();
  const {ref: ref3} = useScrollAnimation();
  const {ref: ref4} = useScrollAnimation();
  const {ref: ref5} = useScrollAnimation();

  return (
    <AssetGridContainer>
      {images[0] && 
        <FullWidthImageWrapper ref={ref1}>
          <Image 
            src={"https:" + images[0].file.url} 
            alt={images[0].description} 
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </FullWidthImageWrapper>
      }
      <RowContainer>
        {images[1] && <TallImageWrapper ref={ref2}><Image 
          src={"https:" + images[1].file.url} 
          alt={images[1].description}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        /></TallImageWrapper>}
        <ColumnContainer>
          {images[2] && <FullWidthImageWrapper ref={ref3}><Image 
            src={"https:" + images[2].file.url} 
            alt={images[2].description}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          /></FullWidthImageWrapper>}
          {images[3] && <FullWidthImageWrapper ref={ref4}><Image 
            src={"https:" + images[3].file.url} 
            alt={images[3].description}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          /></FullWidthImageWrapper>}
        </ColumnContainer>
      </RowContainer>
      {images[4] && <FullWidthImageWrapper ref={ref5}><Image 
        src={"https:" + images[4].file.url} 
        alt={images[4].description}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      /></FullWidthImageWrapper>}
    </AssetGridContainer>
  );
};
