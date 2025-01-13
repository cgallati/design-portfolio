import { getHomePage } from "../contentful/api";
import { TypeHomePage } from "../contentful/types";
import { IntroSection } from "../components/IntroSection";
import { ProjectCard, ProjectListSection } from "../components";
import { responsiveValues, tokens } from "../lib/theme";

import styled from "@emotion/styled";
const PageWrapper = styled.div`
  ${responsiveValues("margin", {
    s: "0 " + tokens.spacing[4],
    m: "0 " + tokens.spacing[4],
    l: "0 " + tokens.spacing[7],
    xl: "0 " + "13rem",
  })};
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

