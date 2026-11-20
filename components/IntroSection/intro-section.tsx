import { FC, ReactNode } from "react";
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
  italicIntroduction?: boolean;
  children?: ReactNode;
};
export const IntroSection: FC<IntroSectionProps> = ({
  title,
  introduction,
  italicIntroduction = false,
  children,
}) => {
  const {ref: titleRef} = useScrollAnimation();
  return (
    <IntroSectionFrame>
      <IntroSectionTextContainer ref={titleRef}>
        <IntroSectionTitle>{title}</IntroSectionTitle>
        <IntroSectionSubtitle italic={italicIntroduction}>
          {introduction}
        </IntroSectionSubtitle>
        {children}
      </IntroSectionTextContainer>
    </IntroSectionFrame>
  );
};
