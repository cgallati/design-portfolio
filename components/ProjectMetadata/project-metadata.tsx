import { HorizontalLine } from "../styles";
import {
  MetadataDescription,
  MetadataDescriptionWrapper,
  MetadataItemDivider,
  MetadataItemsKey,
  MetadataItemsValue,
  MetadataItemsWrapper,
  MetadataWrapper,
  MobileOnlyMetadataItemDivider,
} from "./project-metadata.styles";
import { useInView } from "react-intersection-observer";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
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
  const { ref: mobileRef, inView: mobileInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: roleRef, inView: roleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: horizontalLineRef, inView: horizontalLineInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const {ref: scrollRef} = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <HorizontalLine/>
      <MetadataWrapper>
        <MetadataDescriptionWrapper>
          <MetadataDescription>{introduction}</MetadataDescription>
        </MetadataDescriptionWrapper>
        <div ref={mobileRef}>
          <MobileOnlyMetadataItemDivider inView={mobileInView} />
        </div>
        <MetadataItemsWrapper>
        <MetadataItemsKey>Role</MetadataItemsKey>
        <MetadataItemsValue>{role}</MetadataItemsValue>
        <div ref={roleRef}>
          <MetadataItemDivider inView={roleInView} />
        </div>
        {team && team.length > 0 && <MetadataItemsKey>Team</MetadataItemsKey>}
        {team &&team.map((teammate) => {
          return (
            <MetadataItemsValue key={teammate}>{teammate}</MetadataItemsValue>
          );
        })}
        { team && team.length > 0 && <div ref={teamRef}>
          <MetadataItemDivider inView={teamInView} />
        </div>
        }
        <MetadataItemsKey>Skills</MetadataItemsKey>
        {skills.map((skill) => {
          return <MetadataItemsValue key={skill}>{skill}</MetadataItemsValue>;
        })}
        <div ref={skillsRef}>
          <MetadataItemDivider inView={skillsInView} />
        </div>
        <MetadataItemsKey>Timeline</MetadataItemsKey>
        <MetadataItemsValue>{timeline}</MetadataItemsValue>
      </MetadataItemsWrapper>
    </MetadataWrapper>
    </div>
  );
};
