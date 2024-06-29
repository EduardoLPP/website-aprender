import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export interface DescroptionProps {
    title: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${pixelToRem(300)};
`;

export const Line = styled.div`
    display: flex;
    min-height: 8px;
    width: 100%;
    background: var(--purple);
    border-radius: ${pixelToRem(2)};
    margin-bottom: ${pixelToRem(15)};
`;

export const Title = styled.p`
    color: var(--white);
    font: var(--font-subtitle);
`;