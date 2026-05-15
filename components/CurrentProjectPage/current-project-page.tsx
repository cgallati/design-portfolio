import {
  PageWrapper,
  StatusBadge,
  HeroSection,
  HeroTitle,
  HeroIntro,
  DemoCtaWrapper,
  DemoCtaButton,
  DemoNote,
} from "./current-project-page.styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const CURRENT_PROJECT_PAGE = {
  title: "Aerolink",
  introduction:
    "Aerolink helps pilots build a clearer picture of non-towered airport traffic by uniting three channels they already rely on separately: radio calls, aircraft position, and airport conditions. The result is a shared, airport-centered view that reduces uncertainty during approach and takeoff planning.",
  status: "In active development · designer-built, AI-assisted",
  demoUrl: "https://aerolink-demo.vercel.app",
  demoNote: "Designed for iPad mini — works best on iPads or desktop.",
};

export const CurrentProjectPage = () => {
  const { ref: heroRef } = useScrollAnimation();
  const { ref: ctaRef } = useScrollAnimation({ delay: 400 });

  return (
    <PageWrapper>
      <HeroSection>
        <div ref={heroRef}>
          <HeroTitle>{CURRENT_PROJECT_PAGE.title}</HeroTitle>
          <StatusBadge>{CURRENT_PROJECT_PAGE.status}</StatusBadge>
          <HeroIntro>{CURRENT_PROJECT_PAGE.introduction}</HeroIntro>
        </div>

        <DemoCtaWrapper ref={ctaRef}>
          <DemoCtaButton
            href={CURRENT_PROJECT_PAGE.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View the live demo <span aria-hidden>→</span>
          </DemoCtaButton>
          <DemoNote>{CURRENT_PROJECT_PAGE.demoNote}</DemoNote>
        </DemoCtaWrapper>
      </HeroSection>
    </PageWrapper>
  );
};
