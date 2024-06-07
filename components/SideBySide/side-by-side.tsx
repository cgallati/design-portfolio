import {FC} from "react";
import {TypeSideBySide} from "../../contentful/types";
import {
    StyledImage,
    AssetWrapper,
    TextFrame,
    Text,
    Title,
    TextWrapper,
    HorizontalContentDivider, StyledOffsetImage
} from "./side-by-side.styles";
import {BLOCKS, Document} from "@contentful/rich-text-types";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {SlideFrame} from "../Layout";


export const SideBySide: FC<TypeSideBySide>  = ({fields}) => {
    const {title, photoOnLeft, darkMode, asset, richText, offsetImage} = fields;

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => (
                <Text>{children}</Text>
            ),
            [BLOCKS.HR]: () => <HorizontalContentDivider darkMode={darkMode} />,
        },
    };

    const body = documentToReactComponents(richText as Document, options);

    const ImageComponent = offsetImage ? StyledOffsetImage : StyledImage;

    const assetComponent =
        <AssetWrapper >
            <ImageComponent src={"https:" + asset.fields.file.url} alt={asset.fields.description} fill />
        </AssetWrapper>

    const textComponent =
        <TextFrame darkMode={darkMode}>
            <TextWrapper>
                <Title>{title}</Title>
                {body}
            </TextWrapper>
        </TextFrame>

    const components = photoOnLeft ? [assetComponent, textComponent] : [textComponent, assetComponent];
    return (
    <SlideFrame>
        {components}
    </SlideFrame>
  );
}