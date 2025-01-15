import { getHomePage } from "../contentful/api";
import { TypeHomePage } from "../contentful/types";
import { IntroSection } from "../components/IntroSection";
import { ProjectCard, ProjectListSection } from "../components";
import { responsiveValues, tokens } from "../lib/theme";

import styled from "@emotion/styled";
const PageWrapper = styled.div`
  ${responsiveValues("padding", {
    s: "0 2rem",
    m: "0 3rem",
    l: "0 4rem",
    xl: "0 5rem",
  })};
  max-width: 1450px;
  margin: 0 auto;
  box-sizing: content-box;
`;

export default function Index({
  preview,
  content,
}: {
  preview: boolean;
  content: TypeHomePage;
}) {
  const { title, introduction, projects } = content.fields;
  return (
    <PageWrapper>
      <IntroSection title={title} introduction={introduction} />
      {projects && (
        <ProjectListSection>
          {projects.map(({ fields }, index) => (
            <ProjectCard
              key={fields.title}
              img={fields.coverImage}
              title={fields.title}
              subtitle={fields.excerpt}
              slug={fields.slug}
              index={index}
            />
          ))}
        </ProjectListSection>
      )}
    </PageWrapper>
  );
}

export async function getStaticProps({ preview = false }) {
  const content = await getHomePage();
  return {
    props: { preview, content },
  };
}

