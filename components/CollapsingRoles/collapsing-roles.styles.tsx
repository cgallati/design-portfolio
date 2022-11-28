import styled from "@emotion/styled";

interface ToggleProps {
  readonly isActive: boolean;
  readonly maxHeight?: number;
}

export const Frame = styled.section<ToggleProps>`
  max-height: ${(props) => props.maxHeight}px;
  transition: max-height 0.5s ease;
  margin-bottom: 1rem;
`;

export const Header = styled.header`
  cursor: pointer;
  align-items: center;
  margin-bottom: 1rem;
  display: inline;
`;

export const RolesHeading = styled.h2`
  font-family: ${({ theme }) => theme.typography.body.family};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2.6px;
  margin: 0;
  display: inline;
`;

export const Roles = styled.ul`
  font-family: ${({ theme }) => theme.typography.body.family};
  letter-spacing: 0.65px;
  font-size: 18px;

  li {
    list-style-position: outside;
    list-style-type: "—";
    padding-left: 1rem;
    ::marker {
      margin-right: 2rem;
    }
  }
`;
