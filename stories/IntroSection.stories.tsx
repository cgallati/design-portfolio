import type {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {IntroSection} from "../components/IntroSection";
import {Button} from "./Button";

const meta: Meta<typeof IntroSection> = {
    title: 'Blocks/Intro Section',
    component: IntroSection,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<typeof IntroSection>;

export const Primary: Story = {
    args: {
        title: 'Hello, I’m Steven.',
        introduction: 'I’m a UX design student at SCAD who believes experience design should focus on the entire journey, where each impression matters.',
    },
};