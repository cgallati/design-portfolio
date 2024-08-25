import { FC } from "react";
import {
  IntroSectionFrame,
  IntroSectionSubtitle,
  IntroSectionTextContainer,
  IntroSectionTitle,
} from "./intro-section.styles";

type IntroSectionProps = {
  title: string;
  introduction: string;
};
export const IntroSection: FC<IntroSectionProps> = ({
  title,
  introduction,
}) => {
  return (
    <IntroSectionFrame>
      <IntroSectionTextContainer>
        <IntroSectionTitle>{title}</IntroSectionTitle>
        <IntroSectionSubtitle>{introduction}</IntroSectionSubtitle>
      </IntroSectionTextContainer>
    </IntroSectionFrame>
  );
};
