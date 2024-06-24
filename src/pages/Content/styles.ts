import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.div`
    margin-top: ${pixelToRem(100)};
    padding-left: ${pixelToRem(138)};
    display: flex;
    flex-direction: row;
`;

export const Title = styled.p`
    color: var(--white);
`;

export const BlackCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${pixelToRem(324)};
    min-height: ${pixelToRem(254)};
    border-radius: ${pixelToRem(5)};
    background: var(--card);
    align-items: center;
    justify-content: center;
`;

export const IconCard = styled.div`
    width: ${pixelToRem(70)};
    height: ${pixelToRem(70)};
    background-image: url("/images/tag.svg");
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: ${pixelToRem(25)};
`;