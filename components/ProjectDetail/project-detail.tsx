import Image from "next/image";
import { IProject } from "../../types/project";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import {
  Title,
  Subtitle,
  TopRule,
  BottomRule,
  BottomNav,
  BottomNavLink,
} from "./project-detail.styles";
import { FC } from "react";

export const ProjectDetail: FC<{ project: IProject }> = ({ project }) => {
  const document: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    // @ts-ignore
    content: project.content.content,
  };
  const body = documentToReactComponents(document);
  const imgFields = project.bgImage.fields;

  return (
    <>
      <TopRule />
      <Title>{project.title}</Title>
      <Subtitle>{project.subtitle}</Subtitle>
      <Image
        src={"https:" + imgFields.file.url}
        alt={imgFields.description}
        width={imgFields.file.details.image.width}
        height={imgFields.file.details.image.height}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          marginTop: "1rem",
        }}
        priority={true}
      />
      {body}
      <BottomRule />
      <BottomNav>
        <BottomNavLink
          href={"/project/" + project.previous}
          disabled={!project.previous}
        >
          {"< "}Previous Project
        </BottomNavLink>
        <BottomNavLink
          href={"/project/" + project.next}
          disabled={!project.next}
        >
          Next Project{" >"}
        </BottomNavLink>
      </BottomNav>
    </>
  );
};
