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
  BodyParagraph,
} from "./project-detail.styles";
import { FC } from "react";
import { EmbeddedImage } from "./EmbeddedImage";
import { CollapsingRoles } from "../CollapsingRoles/collapsing-roles";

export const ProjectDetail: FC<{ project: IProject }> = ({ project }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, description } = node.data.target.fields;
        const { height, width } = file.details.image;
        return (
          <EmbeddedImage
            src={"https:" + file.url}
            height={height}
            width={width}
            alt={description}
          />
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <BodyParagraph>{children}</BodyParagraph>
      ),
      [BLOCKS.UL_LIST]: (node) => {
        const roles = node.content.map((li) => li.content[0].content[0].value);
        return <CollapsingRoles roles={roles} />;
      },
    },
  };
  const body = documentToReactComponents(project.content as Document, options);
  const { description, file } = project.bgImage.fields;

  return (
    <>
      <TopRule />
      <Title>{project.title}</Title>
      <Subtitle>{project.subtitle}</Subtitle>
      <EmbeddedImage
        src={"https:" + file.url}
        alt={description}
        width={file.details.image.width}
        height={file.details.image.height}
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
