import styled from "@emotion/styled";
import {responsiveValues} from "../../lib/theme";

export const ContentWrapper = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1450px;
`;

export const ColorBlockWrapper = styled.div`
    position: relative;
    &:before {
        content: "";
        display: block;
        padding-bottom: 56.25%; // for 16:9 aspect ratio
    }
    width: 100%;
`;

export const ColorBlock = styled.div<{color: string}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.color};
`;

export const ColorList = styled.div`
    display: flex;
    ${responsiveValues('gap', {
        s: '.5rem',
        m: '1rem',
        l: '1.5rem',
        xl: '2rem',
    })};
`;

export const LilIconList = styled.div`
    display: flex;
    ${responsiveValues('gap', {
        s: '.5rem',
        m: '1rem',
        l: '3rem',
        xl: '4.5rem',
    })};
`;

export const IconList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${responsiveValues('margin-top', {
        s: '2rem',
        m: '4rem',
        l: '7rem',
        xl: '9rem',
    })};
    ${responsiveValues('gap', {
        s: '2rem',
        m: '4rem',
        l: '6rem',
        xl: '8rem',
    })};
`;

export const LogoImage = styled.img`
    display: inline;
    align-self: center;
    ${responsiveValues('width', {
        s: '10rem',
        m: '15rem',
        l: '20rem',
        xl: '25rem',
    })};
`

export const IconImg = styled.img`
    display: inline-block;
    ${responsiveValues('width', {
        s: '2.5rem',
        m: '3.5rem',
        l: '5rem',
        xl: '6.5rem',
    })};
`;



