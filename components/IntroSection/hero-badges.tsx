import styled from "@emotion/styled";
import Image from "next/image";
import { responsiveValues } from "../../lib/theme";
import { OPEN_TO_WORK } from "../../lib/constants";

// Label + logo badge rows under the home headline.
const HERO_BADGES = [
  { label: "UX Designer", logo: "/assets/logos/youtube-badge.svg", alt: "YouTube" },
  { label: "Prev.", logo: "/assets/logos/lenovo-badge.svg", alt: "Lenovo" },
  { label: "BFA, UX Design", logo: "/assets/logos/scad-badge.svg", alt: "SCAD" },
];

export const HeroBadges = () => (
  <BadgeList>
    {HERO_BADGES.map(({ label, logo, alt }) => (
      <BadgeRow key={alt}>
        <BadgeLabel>{label}</BadgeLabel>
        <Image src={logo} alt={alt} width={109} height={60} />
      </BadgeRow>
    ))}
    {OPEN_TO_WORK.enabled && <OpenToWork>{OPEN_TO_WORK.text}</OpenToWork>}
  </BadgeList>
);

const BadgeList = styled.div`
  ${responsiveValues("margin-top", { s: "2rem", m: "2.5rem", l: "3rem", xl: "3rem" })};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* the badge art carries its own shadow padding; pull it in visually */
  img {
    margin: -10px 0 -10px -4px;
  }
`;

const BadgeLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.body.family};
  ${responsiveValues("font-size", { s: "16px", m: "17px", l: "18px", xl: "18px" })};
  color: ${({ theme }) => theme.color.secondary};
  min-width: 0;
`;

const OpenToWork = styled.p`
  margin-top: 1.25rem;
  font-family: ${({ theme }) => theme.typography.body.family};
  ${responsiveValues("font-size", { s: "15px", m: "16px", l: "17px", xl: "17px" })};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3fb950;
    flex-shrink: 0;
  }
`;
