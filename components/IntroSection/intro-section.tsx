import { FC } from "react";
import {
  IntroSectionFrame,
  IntroSectionSubtitle,
  IntroSectionTextContainer,
  IntroSectionTitle,
} from "./intro-section.styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

type IntroSectionProps = {
  title: string;
  introduction: string;
};
export const IntroSection: FC<IntroSectionProps> = ({
  title,
  introduction,
}) => {
  const {ref: titleRef} = useScrollAnimation();
  return (
    <IntroSectionFrame>
      <IntroSectionTextContainer ref={titleRef}>
        <IntroSectionTitle>{title}</IntroSectionTitle>
        <IntroSectionSubtitle>{introduction}</IntroSectionSubtitle>
      </IntroSectionTextContainer>
    </IntroSectionFrame>
  );
};
