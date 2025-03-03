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

export const Banner: FC<TypeBanner> = ({
  fields: { title, bannerText: text },
}) => {
  return (
    <BannerWrapper>
      <HorizontalLine inView={true}/>
      <BannerContainer>
        <Title>{title}</Title>
        <TextWrapper>
          <Text>{text}</Text>
        </TextWrapper>
      </BannerContainer>
    </BannerWrapper>
  );
};
