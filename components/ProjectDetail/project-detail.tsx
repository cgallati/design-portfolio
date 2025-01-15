import React, { FC, useEffect } from "react";
import { EmbeddedImage } from "./EmbeddedImage";
import { IntroSection } from "../IntroSection";
import { ProjectNavBar } from "../ProjectNavBar";
import { ProjectSections } from "../ProjectSections";
import { ProjectWithPointers } from "../../contentful/api";
import { CenterStage } from "../CenterStage";
import { ProjectMetadata } from "../ProjectMetadata";
import styled from "@emotion/styled";
import { ProjectContext } from "../ProjectContext";
import { responsiveValues, tokens } from "../../lib/theme";
import { LargeImageCard } from "../LargeImageCard/large-image-card";
import { AssetGrid } from "../";



export const ProjectDetail: FC<{ project: ProjectWithPointers }> = ({
  project,
}) => {
  const [activeSection, setActiveSection] = React.useState<number>(0);
  const [visibleSections, setVisibleSections] = React.useState<number[]>([]);

  const addVisibleSection = (section: number) => {
    if (!visibleSections.includes(section)) {
      setVisibleSections([...visibleSections, section]);
    }
  };

  const removeVisibleSection = (section: number) => {
    setVisibleSections(visibleSections.filter((s) => s !== section));
  };

  useEffect(() => {
    setActiveSection(visibleSections.sort((a, b) => a - b)[0]);
  }, [visibleSections]);

  const { next, previous, fields } = project;
  const {
    introduction,
    title,
    coverImage,
    sections,
    centerStage,
    metadata,
    projectContextSections,
    largeImageCard,
    assetGrid
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

  return (
    <>
      <IntroSectionWrapper>
        <IntroSection title={title} introduction={introduction} />
      </IntroSectionWrapper>
      <EmbeddedImage
        src={"https:" + file.url}
        alt={description}
        width={file.details.image.width}
        height={file.details.image.height}
        priority={true}
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
      {assetGrid && <AssetGrid images={assetGrid.map((image) => ({
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
          <ProjectNavBar
            sections={sections}
            activeSection={activeSection}
          />
          <CenterStage text={centerStage} />
          <ProjectSections
            sections={sections}
            addVisibleSection={addVisibleSection}
            removeVisibleSection={removeVisibleSection}
          />
        </>
      )}
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
