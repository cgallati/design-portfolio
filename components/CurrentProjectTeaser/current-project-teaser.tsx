import Link from "next/link";
import {
  TeaserCard,
  TeaserContent,
  TeaserEyebrowRow,
  TeaserPulse,
  TeaserEyebrow,
  TeaserTitle,
  TeaserStatus,
  TeaserNote,
  TeaserArrow,
} from "./current-project-teaser.styles";
import { OPEN_TO_WORK } from "../../lib/constants";

// Set `href` to link the card somewhere (internal route); leave it null for a
// static blurb with no arrow.
const CURRENT_PROJECT_TEASER: {
  eyebrow: string;
  title: string;
  status: string;
  href: string | null;
} = {
  eyebrow: "Currently",
  title: "UX Designer at YouTube",
  status:
    "Designing on a contract with YouTube in San Bruno, shaping experiences used by billions of viewers and creators.",
  href: null,
};

export const CurrentProjectTeaser = () => {
  const { href } = CURRENT_PROJECT_TEASER;

  const card = (
    <TeaserCard interactive={!!href}>
      <TeaserContent>
        <TeaserEyebrowRow>
          <TeaserPulse />
          <TeaserEyebrow>{CURRENT_PROJECT_TEASER.eyebrow}</TeaserEyebrow>
        </TeaserEyebrowRow>
        <TeaserTitle>{CURRENT_PROJECT_TEASER.title}</TeaserTitle>
        <TeaserStatus>{CURRENT_PROJECT_TEASER.status}</TeaserStatus>
        {OPEN_TO_WORK.enabled && <TeaserNote>{OPEN_TO_WORK.text}</TeaserNote>}
      </TeaserContent>
      {href && (
        <TeaserArrow className="teaser-arrow" aria-hidden>
          →
        </TeaserArrow>
      )}
    </TeaserCard>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      {card}
    </Link>
  );
};
