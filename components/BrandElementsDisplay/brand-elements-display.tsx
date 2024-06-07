import {SlideFrame} from "../Layout";
import {
  ColorBlock,
  ColorBlockWrapper,
  ColorList,
  ContentWrapper,
  IconImg, IconList,
  LilIconList, LogoImage,
} from "./brand-elements-display.styles";
import {TypeBrandElementsDisplay} from "../../contentful/types";
import {FC} from "react";
import Image from "next/image";

export const BrandElementsDisplay: FC<TypeBrandElementsDisplay> = ({fields}) => {
  const {colors, icons} = fields;
  return (
    <SlideFrame>
    <ContentWrapper>
      <ColorList>
        {colors.map((color, index) => (
            <ColorBlockWrapper key={index+'_'+color}>
              <ColorBlock key={index+'_'+color} color={color} />
            </ColorBlockWrapper>
        ))}
      </ColorList>
      <IconList>
          <LogoImage src={"https:" + fields.leftLogo.fields.file.url} alt={fields.leftLogo.fields.description}/>
        <LilIconList>
          {icons && icons.map((icon, index) => (
            <IconImg key={index+'_'+icon.sys.id} src={"https:" + icon.fields.file.url} alt={icon.fields.description}/>
          ))}
        </LilIconList>
      </IconList>
    </ContentWrapper>
    </SlideFrame>
  );
}