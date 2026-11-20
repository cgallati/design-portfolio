import styled from "@emotion/styled";
import { HorizontalLine, ProjectListSection } from "../components/";
import { tokens, responsiveValues, mq } from "../lib/theme";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { OPEN_TO_WORK } from "../lib/constants";

const EXPERIENCE = [
  { role: "UX Designer", org: "YouTube · Contract", dates: "2026 – Present" },
  { role: "UX Designer Intern", org: "Lenovo", dates: "2025 – 2026" },
  { role: "UX Researcher, HMI", org: "Oshkosh Corporation · Contract", dates: "2025" },
  { role: "Brand Experience", org: "Everything Zen Sailing Charters · Freelance", dates: "2022 – 2023" },
];

export default function About() {
  const { ref: introRef } = useScrollAnimation();
  const { ref: aboutRef } = useScrollAnimation();
  const { ref: expRef } = useScrollAnimation();
  const { ref: vpRef } = useScrollAnimation();

  return (
    <AboutPageWrapper>
      <AboutParagraph ref={introRef}>
        I’m a UX designer with a background in graphic design, passionate about
        creating user-centered experiences across physical and digital spaces.
        I design for clarity, function, and beauty, crafting systems that solve
        complex problems with impact.
        {OPEN_TO_WORK.enabled && <OpenToWork>{OPEN_TO_WORK.text}</OpenToWork>}
      </AboutParagraph>
      <div ref={aboutRef}>
        <HorizontalLine />
        <FlexRow>
          <ImageContainer>
            <ImageWrapper>
              <Image 
                src="/assets/avatar.png" 
                alt="Profile avatar"
                fill
                sizes="100vw"
                style={{ 
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              </ImageWrapper>
          </ImageContainer>
          <FlexColumn>
            <FlexItem>
              <PrimaryText>BFA in User Experience (UX) Design, 2026</PrimaryText>
              <SecondaryText>Savannah College of Art and Design</SecondaryText>
            </FlexItem>
            <HorizontalLine />
            <FlexItem>
              <PrimaryText>Associates in Graphic Design</PrimaryText>
              <SecondaryText>Trident Technical College</SecondaryText>
            </FlexItem>
          </FlexColumn>
          <MobileOnlyHorizontalLine />
        </FlexRow>
      <DesktopOnlyHorizontalLine />
      </div>
      <ExperienceSection ref={expRef}>
        <SectionLabel>Experience</SectionLabel>
        {EXPERIENCE.map(({ role, org, dates }) => (
          <ExperienceRow key={org}>
            <div>
              <PrimaryText>{role}</PrimaryText>
              <SecondaryText>{org}</SecondaryText>
            </div>
            <SecondaryText>{dates}</SecondaryText>
          </ExperienceRow>
        ))}
      </ExperienceSection>
      <VeepRow ref={vpRef}>
        <VeepText>
          As Co-President of FLUX, SCAD&apos;s 800+ member UX club, I led the
          officer team through its 10th year, launched FLUXathon 2025 with a
          hands-on vibe coding workshop from Google, and earlier built the web
          design team behind the SCAD StartUp competition.
        </VeepText>
        <VeepCreds>
            <PrimaryText>Co-President</PrimaryText>
            <SecondaryText> FLUX (Future Leaders of User Experience)</SecondaryText>
        </VeepCreds>
      </VeepRow>
    </AboutPageWrapper>
  );
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {},
  };
}

const AboutPageWrapper = styled.div`
  ${responsiveValues("padding", {
    s: "0 2rem",
    m: "0 3rem",
    l: "0 6rem",
    xl: "0 8.75rem",
  })}
`;

const AboutParagraph = styled.p`
  color: #636363;
  font-family: Poppins;
  ${responsiveValues("margin", {
    s: "5rem 0",
    m: "5rem 0",
    l: "10rem 0",
    xl: "15rem 11rem",
  })}
  ${responsiveValues("font-size", {
    s: "28px",
    m: "32px",
    l: "36px",
    xl: "42px",
  })};
  font-style: normal;
  font-weight: 300;
  line-height: 140%; 
  ${responsiveValues("margin-bottom", {
    s: "2.5rem",
    m: "3rem",
    l: "4rem",
    xl: "17rem",
  })};
`;

const FlexRow = styled.div`
  display: flex;
  ${responsiveValues("margin", {
    s: "0",
    m: "0",
    l: "1rem 0",
    xl: "2rem 0",
  })};
  flex-direction: column;
  ${mq[0]} {
    flex-direction: row;
  }

`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  ${responsiveValues("width", {
    s: "150px",
    m: "150px",
    l: "180px",
    xl: "200px",
  })};

  margin-top: 4rem;
  ${mq[0]} {
    margin-top: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1;
  ${mq[0]} {
    border-right: 2px solid #e5e5e5;
    order: 0;
  }
`;

const FlexColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${responsiveValues("padding", {
    s: "0",
    m: "2.5rem 0 2.5rem 1rem",
    l: "2.5rem 0 2.5rem 2rem",
    xl: "2.5rem 0 2.5rem 4rem",
  })};
`;

const MobileOnlyHorizontalLine = styled(HorizontalLine)`
  ${mq[0]} {
    display: none;
  }
`;

const DesktopOnlyHorizontalLine = styled(HorizontalLine)`
display: none;
  ${mq[0]} {
    display: block;
  }
`;

const FlexItem = styled.div`
  flex: 1;
  margin: 1.5rem 0;
`;

const PrimaryText = styled.p`
  color: #151515;
font-family: Poppins;
  ${responsiveValues("font-size", {
    s: "18px",
    m: "20px",
    l: "22px",
    xl: "26px",
  })};
font-style: normal;
font-weight: 400;
line-height: 200%; 
`;

const SecondaryText = styled.p`
  color: #ADADAD;
font-family: Poppins;
  ${responsiveValues("font-size", {
    s: "16px",
    m: "18px",
    l: "18px",
    xl: "20px",
  })};
font-style: normal;
font-weight: 400;
line-height: 200%; 
`;

const OpenToWork = styled.span`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.5em;
  font-weight: 400;
  color: #151515;
`;

const ExperienceSection = styled.section`
  padding-top: 55px;
`;

const SectionLabel = styled.p`
  color: #adadad;
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const ExperienceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 2px solid #e5e5e5;

  & > p {
    white-space: nowrap;
  }
`;

const VeepRow = styled(FlexRow)`
  justify-content: space-between;
  padding: 55px 0 100px;
`;

const VeepText = styled.p`
flex: 1;
color: #636363;
font-family: Poppins;
${responsiveValues("font-size", {
    s: "18px",
    m: "18px",
    l: "22px",
    xl: "24px",
  })};
font-style: normal;
font-weight: 300;
${responsiveValues("line-height", {
    s: "34px",
    m: "33px",
    l: "40px",
    xl: "48px",
  })};
max-width: 600px;
`;

const VeepCreds = styled.div`
flex-basis: 50%;
display: none;
  ${mq[0]} {
    display: block;
  }

`;