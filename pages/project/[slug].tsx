import { getProject, getProjectList } from "../../contentful/api";
import { NextPage } from "next";
import { IProject } from "../../types/project";
import { ProjectDetail } from "../../components";

const Project: NextPage<{ project: IProject }> = ({ project }) => {
  return <ProjectDetail project={project} />;
};

export async function getStaticPaths() {
  const projectList = (await getProjectList()) ?? [];
  const slugParams = projectList.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths: [...slugParams],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = await getProject(params.slug);
  return { props: { project }, revalidate: 10 };
}

export default Project;
