import React, { FC, useEffect } from "react";
import { EmbeddedImage } from "./EmbeddedImage";
import { NavigationContainer } from "./navigation-container";
import { IntroSection } from "../IntroSection";
import { ProjectNavBar } from "../ProjectNavBar";
import { ProjectSections } from "../ProjectSections";
import { ProjectWithPointers } from "../../contentful/api";
import { ProjectMetadata } from "../ProjectMetadata";
import styled from "@emotion/styled";
import { ProjectContext } from "../ProjectContext";
import { responsiveValues, tokens } from "../../lib/theme";
import { LargeImageCard } from "../LargeImageCard/large-image-card";
import { AssetGrid } from "../";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ProjectNavigation } from "../../contentful/api";
import Image from "next/image";

export const ProjectDetail: FC<{ 
  project: ProjectWithPointers;
  navigation: ProjectNavigation;
}> = ({
  project,
  navigation
}) => {
  // const [activeSection, setActiveSection] = React.useState<number>(0);
  // const [visibleSections, setVisibleSections] = React.useState<number[]>([]);
  const { ref, inView } = useInView();

  // const addVisibleSection = (section: number) => {
  //   if (!visibleSections.includes(section)) {
  //     setVisibleSections([...visibleSections, section]);
  //   }
  // };

  // const removeVisibleSection = (section: number) => {
  //   setVisibleSections(visibleSections.filter((s) => s !== section));
  // };

  // useEffect(() => {
  //   setActiveSection(visibleSections.sort((a, b) => a - b)[0]);
  // }, [visibleSections]);

  const { fields } = project;
  const {
    introduction,
    title,
    coverImage,
    sections,
    metadata,
    projectContextSections,
    largeImageCard,
    assetGrid,
    alternateCoverVideo
  } = fields;
  const { role, team, skills, timeline, metadataDescription } = metadata.fields;
  const { description, file } = coverImage.fields;
  const contextSections = projectContextSections?.map(
    (projectContextSection) => {
      const { title, paragraph1, paragraph2, paragraph3 } =
        projectContextSection.fields;
      return {
        title,
        paragraphs: [paragraph1, paragraph2, paragraph3],
      };
    }
  );


  const NavigationButton = styled.div`
    display: flex;
    align-items: center;
    gap: ${tokens.spacing[1]};
    padding: ${tokens.spacing[3]} ${tokens.spacing[4]};
    color: ${({ theme }) => theme.color.primary};
    transition: all 0.2s ease-in-out;
    ${responsiveValues("font-size", {
      s: "16px",
      m: "18px",
      l: "20px",
      xl: "22px"
    })};
    letter-spacing: 0.05em;
    cursor: pointer;
    
    img {
      ${responsiveValues("width", {
        s: "16px",
        m: "18px",
        l: "20px",
        xl: "22px"
      })};
      ${responsiveValues("height", {
        s: "16px",
        m: "18px",
        l: "20px",
        xl: "22px"
      })};
    }
    
    &[data-disabled="true"] {
      opacity: 0.5;
      pointer-events: none;
    }
  `;

  return (
    <>
      <IntroSectionWrapper>
        <IntroSection title={title} introduction={introduction} />
      </IntroSectionWrapper>
      <EmbeddedImage
        src={"https:" + file.url}
        alt={description}
        priority={true}
        jkItsAVid={alternateCoverVideo?.fields?.file?.url}
      />
      <ProjectIntroWrapper>
        <ProjectContext sections={contextSections || []} />
        <ProjectMetadata
          introduction={metadataDescription}
          role={role}
          team={team}
          skills={skills}
          timeline={timeline}
        />
      </ProjectIntroWrapper>
      {assetGrid && !sections && <AssetGrid images={assetGrid.map((image) => ({
        file: { 
          url: image.fields.file.url,
          details: {
            image: {
              width: image.fields.file.details.image.width,
              height: image.fields.file.details.image.height
            }
          }
        },
        description: image.fields.description,
      }))} />}
      {largeImageCard && (
        <LargeImageCard
          src={"https:" + largeImageCard.fields.file.url}
          alt={largeImageCard.fields.description}
        />
      )}
      {sections && (
        <>
          <HowDidWeGetHereWrapper ref={ref} inView={inView}>
            <h3>How did we get here?</h3>
            <p>Let&apos;s jump into it.</p>
          </HowDidWeGetHereWrapper>
          {/* <ProjectNavBar
            sections={sections}
            activeSection={activeSection}
          /> */}
          <ProjectSections
            sections={sections}
            // addVisibleSection={addVisibleSection}
            // removeVisibleSection={removeVisibleSection}
          />
        </>
      )}
      {assetGrid && sections && <AssetGrid images={assetGrid.map((image) => ({
        file: { 
          url: image.fields.file.url,
          details: {
            image: {
              width: image.fields.file.details.image.width,
              height: image.fields.file.details.image.height
            }
          }
        },
        description: image.fields.description,
      }))} />}
      <NavigationContainer>
        <Link href={navigation.previous ? `/project/${navigation.previous}` : "#"} passHref>
          <NavigationButton data-disabled={!navigation.previous}>
            <Image src="/assets/prev-arrow.svg" alt="Previous" width={22} height={22} />
            Prev
          </NavigationButton>
        </Link>
        <Link href={navigation.next ? `/project/${navigation.next}` : "#"} passHref>
          <NavigationButton data-disabled={!navigation.next}>
            Next
            <Image src="/assets/next-arrow.svg" alt="Next" width={22} height={22} />
          </NavigationButton>
        </Link>
      </NavigationContainer>
    </>
  );
};

const IntroSectionWrapper = styled.div`
  ${responsiveValues("margin", {
    s: "0 " + tokens.spacing[4],
    m: "0 " + tokens.spacing[4],
    l: "0 " + tokens.spacing[7],
    xl: "0 " + "13rem",
  })};
`;

const ProjectIntroWrapper = styled.div`
  ${responsiveValues("padding", {
    s: "3.5rem 1rem 0",
    m: "5rem 2.5rem 0",
    l: "7rem 4rem 0",
    xl: "10rem 6rem 0",
  })};
`;

const HowDidWeGetHereWrapper = styled.div<{ inView: boolean }>`
  opacity: 0;
  transform: translateX(100px);
  ${({ inView }) => inView && "opacity: 1; transform: translateX(0);"};
  transition: all 2s ease-out .5s;


  ${responsiveValues("padding", {
    s: "3.5rem 4rem 10rem",
    m: "5rem 5rem 15rem",
    l: "7rem 10rem 19rem",
    xl: "25rem 17rem 23rem",
  })};

  h3 {
    color: #151515;
    font-family: Poppins;
    ${responsiveValues("font-size", {
      s: "24px",
      m: "28px",
      l: "32px",
      xl: "40.635px",
    })};
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
  }
  p {
    color: #636363;
    font-family: Poppins;
    ${responsiveValues("font-size", {
      s: "18px",
      m: "20px",
      l: "22px",
      xl: "41.911px",
    })};
    font-style: normal;
    font-weight: 300;
    line-height: 135%; 
  }
`;