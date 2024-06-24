import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.button`
    display: flex;
    width: ${pixelToRem(250)};
    background: var(--purple);
    border-radius: ${pixelToRem(2)};
    height: ${pixelToRem(50)};
    justify-content: center;
    align-items: center;
    border: none;

    &:hover {
        background: var(--dark-purple);

        p {
            color: var(--white);
        }
    }
`;

export const Title = styled.p`
    color: var(--black);
    font: var(--font-button);
`;