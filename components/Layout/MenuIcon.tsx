import styled from "@emotion/styled";

interface MenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const IconWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: inherit;
  outline: none;
  border-radius: 0;

  &:hover {
    color: inherit;
  }
`;

const Bar = styled.span<{ isOpen: boolean }>`
  position: absolute;
  width: 38px;
  height: 3px;
  background-color: currentColor;
  transition: transform 0.3s ease;

  &:first-of-type {
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(90deg)")};
  }

  &:last-of-type {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0deg)")};
  }
`;

export const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, onClick }) => {
  return (
    <IconWrapper onClick={onClick} aria-label="Toggle menu">
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
    </IconWrapper>
  );
};

export default MenuIcon;
