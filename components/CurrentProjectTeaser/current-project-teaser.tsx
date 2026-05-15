import Link from "next/link";
import {
  TeaserCard,
  TeaserContent,
  TeaserEyebrowRow,
  TeaserPulse,
  TeaserEyebrow,
  TeaserTitle,
  TeaserStatus,
  TeaserArrow,
} from "./current-project-teaser.styles";

const CURRENT_PROJECT_TEASER = {
  eyebrow: "In active development",
  title: "Aerolink",
  status: "A unified picture of non-towered airport traffic, built for pilots.",
  href: "/current",
};

export const CurrentProjectTeaser = () => {
  return (
    <Link
      href={CURRENT_PROJECT_TEASER.href}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <TeaserCard>
        <TeaserContent>
          <TeaserEyebrowRow>
            <TeaserPulse />
            <TeaserEyebrow>{CURRENT_PROJECT_TEASER.eyebrow}</TeaserEyebrow>
          </TeaserEyebrowRow>
          <TeaserTitle>{CURRENT_PROJECT_TEASER.title}</TeaserTitle>
          <TeaserStatus>{CURRENT_PROJECT_TEASER.status}</TeaserStatus>
        </TeaserContent>
        <TeaserArrow className="teaser-arrow" aria-hidden>
          →
        </TeaserArrow>
      </TeaserCard>
    </Link>
  );
};
