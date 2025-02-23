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

export async function getStaticProps({ params }) {
  const project = await getProject(params.slug);
  const navigation = await getProjectNavigation(params.slug);
  return { props: { project, navigation } };
}

export default Project;
