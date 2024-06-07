import {FC} from "react";
import {SlideFrame, Text} from "./center-stage.styles";


export const CenterStage: FC<{text: string}> = ({text}) => {
    return (
        <SlideFrame>
            <Text>{text}</Text>
        </SlideFrame>
    );
}