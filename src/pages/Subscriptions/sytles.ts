import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${pixelToRem(50)};
`;

export const Title = styled.p`
    color: var(--white);
    font: var(--font);
`;

export const ContainerCardsSubscription = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${pixelToRem(100)};
`;

