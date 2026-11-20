import {getProject, getProjectList, ProjectWithPointers, getProjectNavigation, ProjectNavigation} from "../../contentful/api";
import { NextPage } from "next";
import { ProjectDetail } from "../../components";

const Project: NextPage<{ project: ProjectWithPointers, navigation: ProjectNavigation }> = ({ project, navigation }) => {
  return <ProjectDetail project={project} navigation={navigation} />;
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

export async function getStaticProps({ params, preview = false }) {
  const project = await getProject(params.slug, preview);
  if (!project) return { notFound: true, revalidate: 60 };
  const navigation = await getProjectNavigation(params.slug, preview);
  return { props: { project, navigation, preview } };
}

export default Project;
