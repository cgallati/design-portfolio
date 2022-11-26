import { getProjectList } from "../contentful/api";
import { ProjectCard, ProjectListSection } from "../components/";
import { IProjectCard } from "../types/project";

export default function Index({
  preview,
  projectList,
}: {
  preview: boolean;
  projectList: IProjectCard[];
}) {
  return (
    <ProjectListSection>
      {projectList.map(({ title, bgImage, subtitle }) => (
        <ProjectCard
          key={title}
          img={bgImage}
          title={title}
          subtitle={subtitle}
        />
      ))}
    </ProjectListSection>
  );
}

export async function getStaticProps({ preview = false }) {
  const projectList = (await getProjectList()) ?? [];
  return {
    props: { preview, projectList },
  };
}
