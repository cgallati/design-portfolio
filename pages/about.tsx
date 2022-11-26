import { ProjectListSection } from "../components/";

export default function About() {
  return <ProjectListSection>ABOUT</ProjectListSection>;
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {},
  };
}
