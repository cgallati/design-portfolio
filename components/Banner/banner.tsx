import { FC } from "react";
import { TypeBanner } from "../../contentful/types";
import {
  BannerContainer,
  BannerWrapper,
  Title,
  Text,
  TextWrapper,
} from "./banner.styles";
import { HorizontalLine } from "../styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const Banner: FC<TypeBanner> = ({
  fields: { title, bannerText: text },
}) => {
  // Add scroll animations for title and text
  const titleRef = useScrollAnimation();
  const textRef = useScrollAnimation({ delay: 200 });

  return (
    <BannerWrapper>
      <HorizontalLine/>
      <BannerContainer>
        <Title ref={(el) => titleRef.ref(el)}>{title}</Title>
        <TextWrapper>
          <Text ref={(el) => textRef.ref(el)}>{text}</Text>
        </TextWrapper>
      </BannerContainer>
      <HorizontalLine/>
    </BannerWrapper>
  );
};
