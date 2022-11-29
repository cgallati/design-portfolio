import { ProjectListSection } from "../components/";
import {
  ContactCard,
  ContactContainer,
} from "../components/contact-card.styles";

export default function Contact() {
  return (
    <ProjectListSection>
      <ContactContainer>
        <ContactCard>
          STEVEN VASIL
          <br />
          <a href={"mailto:steven@stevenvasil.com"}>
            {" "}
            STEVEN@STEVENVASIL.COM
          </a>{" "}
        </ContactCard>
      </ContactContainer>
    </ProjectListSection>
  );
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {},
  };
}
