import { ProjectListSection } from "../components/";

export default function Contact() {
  return <ProjectListSection>CONTACT</ProjectListSection>;
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {},
  };
}
