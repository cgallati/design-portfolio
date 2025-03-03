import { FC } from "react";
import { TypeTitleAndText } from "../../contentful/types";
import {
  Container,
  Title,
  Text,
  TextWrapper,
} from "./title-and-text.styles";
import { HorizontalLine } from "../styles";

export const TitleAndText: FC<TypeTitleAndText> = ({ fields }) => {
  const { title, text } = fields;

  return (
    <Container>
      <HorizontalLine />
      <TextWrapper>
        {title && <Title>{title}</Title>}
        <Text>{text}</Text>
      </TextWrapper>
    </Container>
  );
};
