import { getProjectList } from "../contentful/api";
import { ProjectCard, ProjectListSection } from "../components/";
import { IProject } from "../types/project";

export default function Index({
  preview,
  projectList,
}: {
  preview: boolean;
  projectList: IProject[];
}) {
  return (
    <ProjectListSection>
      {projectList.map(({ title, bgImage, subtitle, slug }) => (
        <ProjectCard
          key={title}
          img={bgImage}
          title={title}
          subtitle={subtitle}
          slug={slug}
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
