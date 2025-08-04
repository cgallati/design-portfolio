import { FC } from "react";
import Image from "next/image";
import { TypeContentWithImage } from "../../contentful/types";
import {
  Wrapper,
  ContentSection,
  LeftContent,
  RightContent,
  Heading,
  Subheading,
  TextContent,
  AssetContainer
} from "./content-with-asset.styles";
import { HorizontalLine } from "../styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styled from "@emotion/styled";

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const ContentWithAsset: FC<TypeContentWithImage> = ({ fields }) => {
  const { heading, subtitle, text, asset } = fields;
  
  // Add scroll animations
  const leftContentRef = useScrollAnimation();
  const rightContentRef = useScrollAnimation({ delay: 200 });
  const assetRef = useScrollAnimation({ delay: 300, translateY: 40 });
  
  // Check if the asset is a video by examining file type or URL
  const isVideo = asset?.fields?.file?.contentType?.includes('video') || 
                 asset?.fields?.file?.url?.endsWith('.mp4') ||
                 asset?.fields?.file?.url?.endsWith('.webm') || 
                 asset?.fields?.file?.url?.endsWith('.mov');
  
  return (
    <Wrapper>
      <HorizontalLine />
      <ContentSection>
        <LeftContent ref={(el) => leftContentRef.ref(el)}>
          {heading && <Heading>{heading}</Heading>}
          <Subheading>{subtitle}</Subheading>
        </LeftContent>
        <RightContent ref={(el) => rightContentRef.ref(el)}>
          <TextContent>{text}</TextContent>
        </RightContent>
      </ContentSection>
      <AssetContainer ref={(el) => assetRef.ref(el)}>
        {isVideo ? (
          <StyledVideo autoPlay muted playsInline loop>
            <source src={"https:" + asset.fields.file.url} type="video/mp4" />
          </StyledVideo>
        ) : (
          <Image
            src={"https:" + asset.fields.file.url}
            alt={asset.fields.description || ""}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        )}
      </AssetContainer>
      <HorizontalLine />
    </Wrapper>
  );
};
