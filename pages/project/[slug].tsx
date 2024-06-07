import {getProject, getProjectList, ProjectWithPointers} from "../../contentful/api";
import { NextPage } from "next";
import { ProjectDetail } from "../../components";

const Project: NextPage<{ project: ProjectWithPointers }> = ({ project }) => {
  return <ProjectDetail project={project} />;
};

export async function getStaticPaths() {
  const projectList = (await getProjectList()) ?? [];
  const slugParams = projectList.map((project) => ({
    params: { slug: project.fields.slug },
  }));
  return {
    paths: [...slugParams],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const project = await getProject(params.slug);
  return { props: { project } };
}

export default Project;
