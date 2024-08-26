import React, { FC, useEffect } from "react";
import { EmbeddedImage } from "./EmbeddedImage";
import { IntroSection } from "../IntroSection";
import { ProjectNavBar } from "../ProjectNavBar";
import { ProjectSections } from "../ProjectSections";
import { ProjectWithPointers } from "../../contentful/api";
import { CenterStage } from "../CenterStage";

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
  const { introduction, shortName, title, coverImage, sections, centerStage } =
    fields;
  const { description, file } = coverImage.fields;

  return (
    <>
      <IntroSection title={title} introduction={introduction} />
      <EmbeddedImage
        src={"https:" + file.url}
        alt={description}
        width={file.details.image.width}
        height={file.details.image.height}
        priority={true}
      />
      <ProjectNavBar
        title={shortName}
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
  );
};
