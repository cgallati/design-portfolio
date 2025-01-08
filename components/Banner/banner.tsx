import { FC } from "react";
import { TypeBanner } from "../../contentful/types";
import {
  BannerContainer,
  BannerWrapper,
  Title,
  Text,
  TextWrapper,
} from "./banner.styles";

export const Banner: FC<TypeBanner> = ({
  fields: { title, bannerText: text },
}) => {
  return (
    <BannerWrapper>
      <BannerContainer>
        <Title>{title}</Title>
        <TextWrapper>
          <Text>{text}</Text>
        </TextWrapper>
      </BannerContainer>
    </BannerWrapper>
  );
};
