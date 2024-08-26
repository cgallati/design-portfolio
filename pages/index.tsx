import {getHomePage} from "../contentful/api";
import {TypeHomePage} from "../contentful/types";
import {IntroSection} from "../components/IntroSection";
import {ProjectCard, ProjectListSection} from "../components";

export default function Index({
  preview,
  content,
}: {
  preview: boolean;
  content: TypeHomePage;
}) {
  const {title, introduction, projects} = content.fields;
  return (
    <>
      <IntroSection title={title} introduction={introduction}/>
      {projects &&
        <ProjectListSection>
          {projects.map(({fields}, index) => (
              <ProjectCard
                  key={fields.title}
                  img={fields.coverImage}
                  title={title}
                  subtitle={fields.excerpt}
                  slug={fields.slug}
                  index={index}
              />
          ))}
        </ProjectListSection>
      }
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const content = await getHomePage();
  return {
    props: { preview, content },
  };
}
