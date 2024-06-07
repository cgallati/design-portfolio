import styled from "@emotion/styled";
import Image from "next/image";
import {responsiveValues, tokens} from "../../lib/theme";

export const AssetWrapper = styled.div`
    width: 50vw;
    position: relative;
    flex-basis: 1;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const StyledOffsetImage = styled(Image)`
    object-fit: contain;
    max-width: 50%;
    height: auto;
    margin-left: 17%;
`;

export const TextFrame = styled.div<{darkMode: boolean}>`
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: ${({ theme, darkMode }) => darkMode ? theme.color.darkGray : theme.color.background};
    color: ${({ theme, darkMode }) => darkMode ? theme.color.background : theme.color.primary}
`;

export const TextWrapper = styled.div`
    width: 63%;
`;

export const Title = styled.p`
    ${({ theme }) => responsiveValues("font-size", {
        s: tokens.typography.size[2],
        m: tokens.typography.size[3],
        l: tokens.typography.size[4],
        xl: tokens.typography.size["4.5"]
    })}
    font-weight: ${({ theme }) => theme.typography.subheading.weight};
    ${({ theme }) => responsiveValues("max-width", theme.spacing.centerStage)}
    ${({ theme }) => responsiveValues("margin-bottom", theme.spacing.breathing)}
`;
export const Text = styled.p`
    ${({ theme }) => responsiveValues("font-size", theme.typography.body.size)}
    font-weight: ${({ theme }) => theme.typography.subheading.weight};
    ${({ theme }) => responsiveValues("max-width", theme.spacing.centerStage)}
`;

export const HorizontalContentDivider = styled.hr<{darkMode: boolean}>`
    height: 1px;
    width: 100%;
    ${({ theme }) => responsiveValues("margin-top", {
        s: theme.spacing.breathing.s,
        m: theme.spacing.breathing.s,
        l: theme.spacing.breathing.m,
        xl: theme.spacing.breathing.l
    })}
    ${({ theme }) => responsiveValues("margin-bottom", theme.spacing.breathing)}
    background-color: ${({ theme, darkMode }) => darkMode ? theme.color.background : theme.color.primary}
`;