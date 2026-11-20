import styled from "@emotion/styled";
import { HorizontalLine } from "../components/";
import { tokens, responsiveValues, mq } from "../lib/theme";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { OPEN_TO_WORK } from "../lib/constants";

// Experience rows (logo left, details right). Keep descriptions NDA-safe.
const EXPERIENCE = [
  {
    logo: "/assets/logos/youtube.svg",
    logoWidth: 220,
    alt: "YouTube",
    role: "UX Designer",
    org: "YouTube · Contract · 2026 – Present",
    description:
      "Designing product experiences on a contract with YouTube in San Bruno, working across research, interaction design, and prototyping for one of the world's largest platforms.",
  },
  {
    logo: "/assets/logos/lenovo.png",
    logoWidth: 240,
    alt: "Lenovo",
    role: "UX Designer Intern",
    org: "Lenovo User Experience Exploration (LUXE) · 2025 – 2026",
    description:
      "Part of Lenovo's first LUXE intern cohort. Worked on UX strategy for next-gen AR products, researched where AI and UX intersect, and explored cross-device collaboration. Moderated a panel on accessible design and inclusive AI, and was voted \u201cMost Likely to Launch a Product\u201d by fellow interns.",
  },
  {
    logo: "/assets/logos/oshkosh.svg",
    logoWidth: 260,
    alt: "Oshkosh",
    role: "UX Researcher, HMI",
    org: "Oshkosh Corporation · Contract · 2025",
    description:
      "Researched human-machine interfaces for Oshkosh through SCADpro, translating field insights into design direction for complex vehicle systems.",
  },
  {
    logo: "/assets/logos/flux.svg",
    logoWidth: 130,
    alt: "SCAD FLUX",
    role: "Co-President",
    org: "SCAD FLUX (Future Leaders of User Experience)",
    description:
      "Led SCAD's 800+ member UX club through its 10th year. Launched FLUXathon 2025, bringing in a Google designer for a hands-on vibe coding workshop that ended with every team shipping a working iOS prototype.",
  },
];

export default function About() {
  const { ref: introRef } = useScrollAnimation();
  const { ref: aboutRef } = useScrollAnimation();
  const { ref: expRef } = useScrollAnimation();

  return (
    <AboutPageWrapper>
      <AboutParagraph ref={introRef}>
        I’m a UX designer with a background in graphic design. I turn complex
        systems into clear, confident products, grounded in research and tested
        with real users.
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
      <div ref={expRef}>
        {EXPERIENCE.map(({ logo, logoWidth, alt, role, org, description }) => (
          <ExperienceRow key={alt}>
            <LogoCell>
              <Image
                src={logo}
                alt={alt}
                width={logoWidth}
                height={logoWidth}
                style={{ width: "100%", maxWidth: logoWidth, height: "auto" }}
              />
            </LogoCell>
            <ExperienceDetails>
              <PrimaryText>{role}</PrimaryText>
              <SecondaryText>{org}</SecondaryText>
              <ExperienceDescription>{description}</ExperienceDescription>
            </ExperienceDetails>
          </ExperienceRow>
        ))}
      </div>
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

const ExperienceRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-bottom: 2px solid #e5e5e5;
  ${responsiveValues("padding", {
    s: "3rem 0",
    m: "3.5rem 0",
    l: "4.5rem 0",
    xl: "5rem 0",
  })};

  ${mq[0]} {
    flex-direction: row;
    align-items: center;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 100px;
  }
`;

const LogoCell = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${responsiveValues("max-width", { s: "160px", m: "none", l: "none", xl: "none" })};
  ${mq[0]} {
    justify-content: center;
    padding: 0 2rem;
  }
`;

const ExperienceDetails = styled.div`
  flex: 1;
  ${mq[0]} {
    ${responsiveValues("padding-left", {
      s: "0",
      m: "1rem",
      l: "2rem",
      xl: "4rem",
    })};
  }
`;

const ExperienceDescription = styled.p`
  color: #636363;
  font-family: Poppins;
  font-weight: 300;
  ${responsiveValues("font-size", {
    s: "16px",
    m: "17px",
    l: "18px",
    xl: "20px",
  })};
  line-height: 1.8;
  margin-top: 1.25rem;
  max-width: 600px;
`;
