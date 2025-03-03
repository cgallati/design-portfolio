import { FC } from "react";
import { TypeTitleAndText } from "../../contentful/types";
import {
  Container,
  Title,
  Text,
  TextWrapper,
} from "./title-and-text.styles";
import { HorizontalLine } from "../styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const TitleAndText: FC<TypeTitleAndText> = ({ fields }) => {
  const { title, text } = fields;
  
  // Add scroll animations
  const titleRef = useScrollAnimation();
  const textRef = useScrollAnimation({ delay: 200 });

  return (
    <Container>
      <HorizontalLine />
      <TextWrapper>
        {title && <Title ref={(el) => titleRef.ref(el)}>{title}</Title>}
        <Text ref={(el) => textRef.ref(el)}>{text}</Text>
      </TextWrapper>
    </Container>
  );
};
