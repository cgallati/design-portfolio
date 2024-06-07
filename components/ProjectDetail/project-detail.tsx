import { Project } from "../../types/content-model";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import {
  BottomNav,
  BottomNavLink,
  BodyParagraph,
  NextPreviousIcon,
} from "./project-detail.styles";
import { FC } from "react";
import { EmbeddedImage } from "./EmbeddedImage";
import {IntroSection} from "../IntroSection";
import {ProjectNavBar} from "../ProjectNavBar";
import {ProjectSections} from "../ProjectSections/project-sections";
import {TypeProject} from "../../contentful/types";
import {ProjectWithPointers} from "../../contentful/api";
import {CenterStage} from "../CenterStage";

export const ProjectDetail: FC<{ project: ProjectWithPointers }> = ({ project }) => {

  const {  next, previous , fields} = project;
  const { introduction, shortName, content, title, coverImage, sections, centerStage } = fields;
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
      <ProjectNavBar  title={shortName} sections={sections}/>
      <CenterStage text={centerStage} />
      <ProjectSections sections={sections}/>
      <BottomNav>
        <BottomNavLink
          href={"/project/" + previous}
          disabled={!previous}
        >
          <NextPreviousIcon src={"/tricle.png"} orientation={"left"} />
          PREVIOUS PROJECT
        </BottomNavLink>
        <BottomNavLink
          href={"/project/" + next}
          disabled={!next}
        >
          NEXT PROJECT
          <NextPreviousIcon src={"/tricle.png"} orientation={"right"} />
        </BottomNavLink>
      </BottomNav>
    </>
  );
};
