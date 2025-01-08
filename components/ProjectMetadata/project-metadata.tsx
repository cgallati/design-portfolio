import {
  MetadataDescription,
  MetadataDescriptionWrapper,
  MetadataItemDivider,
  MetadataItemsKey,
  MetadataItemsValue,
  MetadataItemsWrapper,
  MetadataWrapper,
} from "./project-metadata.styles";

export const ProjectMetadata = ({
  introduction,
  role,
  team,
  skills,
  timeline,
}: {
  introduction: string;
  role: string;
  team: string[];
  skills: string[];
  timeline: string;
}) => {
  return (
    <MetadataWrapper>
      <MetadataDescriptionWrapper>
        <MetadataDescription>{introduction}</MetadataDescription>
      </MetadataDescriptionWrapper>
      <MetadataItemsWrapper>
        <MetadataItemsKey>Role</MetadataItemsKey>
        <MetadataItemsValue>{role}</MetadataItemsValue>
        <MetadataItemDivider />
        <MetadataItemsKey>Team</MetadataItemsKey>
        {team.map((teammate) => {
          return (
            <MetadataItemsValue key={teammate}>{teammate}</MetadataItemsValue>
          );
        })}
        <MetadataItemDivider />
        <MetadataItemsKey>Skills</MetadataItemsKey>
        {skills.map((skill) => {
          return <MetadataItemsValue key={skill}>{skill}</MetadataItemsValue>;
        })}
        <MetadataItemDivider />
        <MetadataItemsKey>Timeline</MetadataItemsKey>
        <MetadataItemsValue>{timeline}</MetadataItemsValue>
      </MetadataItemsWrapper>
    </MetadataWrapper>
  );
};
