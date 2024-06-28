import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${pixelToRem(150)};
`;

export const Title = styled.p`
    color: var(--white);
`;

export const ContainerCardsSubscription = styled.div`
    display: flex;
    flex-direction: row;
`;

