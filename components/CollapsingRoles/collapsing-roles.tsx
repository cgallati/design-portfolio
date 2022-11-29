import { FC, RefObject, useEffect, useRef, useState } from "react";
import { Frame, Header, Roles, RolesHeading } from "./collapsing-roles.styles";
import Image from "next/image";
import icon from "../../public/tricle.png";

type CollapsingRolesProps = {
  roles: string[];
};

export const CollapsingRoles: FC<CollapsingRolesProps> = ({ roles }) => {
  const [activeRoles, setActiveRoles] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined); // in px
  const headerEl = useRef<RefObject<HTMLElement>>();

  useEffect(() => {
    isOpen
      ? setMaxHeight(document.documentElement.scrollHeight / 5)
      : // @ts-ignore
        setMaxHeight(headerEl.current?.scrollHeight);
  }, [isOpen]);

  const handleClick = () => {
    setTimeout(
      () => {
        isOpen ? setActiveRoles([]) : setActiveRoles(roles);
        setIsOpen(!isOpen);
      },
      isOpen ? 200 : 0
    );
  };
  return (
    <Frame
      // @ts-ignore
      ref={headerEl}
      isActive={isOpen}
      maxHeight={maxHeight}
    >
      <Roles>
        {activeRoles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </Roles>
      <Header onClick={handleClick}>
        <RolesHeading>{isOpen ? "CLOSE" : "LEARN"} ROLES</RolesHeading>
        <Image
          src={icon}
          width={20}
          height={20}
          alt={""}
          style={{
            display: "inline",
            textAlign: "center",
            marginBottom: "-3px",
            marginLeft: ".75rem",
            transform: `rotate(${isOpen ? "0" : "180"}deg)`,
            transition: "transform 100ms",
          }}
        />
      </Header>
    </Frame>
  );
};
