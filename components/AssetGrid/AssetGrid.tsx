import React from 'react';
import Image from 'next/image';
import {
  AssetGridContainer,
  RowContainer,
  ColumnContainer,
  FullWidthImageWrapper,
  TallImageWrapper,
} from "./asset-grid.styles";

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
  return (
    <AssetGridContainer>
      {images[0] && 
        <FullWidthImageWrapper>
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
        {images[1] && <TallImageWrapper><Image 
          src={"https:" + images[1].file.url} 
          alt={images[1].description}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        /></TallImageWrapper>}
        <ColumnContainer>
          {images[2] && <FullWidthImageWrapper><Image 
            src={"https:" + images[2].file.url} 
            alt={images[2].description}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          /></FullWidthImageWrapper>}
          {images[3] && <FullWidthImageWrapper><Image 
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
      {images[4] && <FullWidthImageWrapper><Image 
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
