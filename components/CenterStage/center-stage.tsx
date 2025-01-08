import { FC } from "react";
import { SlideFrame, Text } from "./center-stage.styles";
import { useInView } from "react-intersection-observer";

export const CenterStage: FC<{ text: string }> = ({ text }) => {
  const { ref, inView, entry } = useInView();
  console.log({ inView });

  return (
    <SlideFrame>
      <Text ref={ref} inView={inView}>
        {text}
      </Text>
    </SlideFrame>
  );
};
