import { getProjectList } from "../contentful/api";
import { ProjectCard, ProjectListSection } from "../components/";
import { IProject } from "../types/project";

export default function Index({
  preview,
  projects,
}: {
  preview: boolean;
  projects: IProject[];
}) {
  const data = projects.map((project) => ({
    name: project.title,
    order: project.order,
  }));
  return (
    <ProjectListSection>
      {projects.map(({ title, bgImage, subtitle, slug }, index) => (
        <ProjectCard
          key={title}
          img={bgImage}
          title={title}
          subtitle={subtitle}
          slug={slug}
          index={index}
        />
      ))}
    </ProjectListSection>
  );
}

export async function getStaticProps({ preview = false }) {
  const projects = (await getProjectList()) ?? [];

  return {
    props: { preview, projects },
  };
}
