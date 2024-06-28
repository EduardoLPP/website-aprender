import styled from "styled-components";
import { pixelToRem  } from "../../utils/functions";

export interface CardProps {
    url?: string;
    title?: string;
}

export const Title = styled.p`
    color: var(--white);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${pixelToRem(324)};
    min-height: ${pixelToRem(254)};
    border-radius: ${pixelToRem(5)};
    background: var(--card);
    align-items: center;
    justify-content: center;
`;

export const IconCard = styled.div<CardProps>`
    width: ${pixelToRem(70)};
    height: ${pixelToRem(70)};
    background: ${(props) => `url(${props.url})`};
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: ${pixelToRem(25)};
`;