import React from 'react';
import { LargeImageWrapper, StyledImage } from './large-image-card.styles';

interface LargeImageCardProps {
  src: string;
  alt: string;
}

export const LargeImageCard: React.FC<LargeImageCardProps> = ({ src, alt }) => {
  return (
    <LargeImageWrapper>
      <StyledImage
        src={src}
        alt={alt}
        width={1200}
        height={675}
        priority
      />
    </LargeImageWrapper>
  );
};
