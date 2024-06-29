import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export interface SubscriptionProps{
    title?: string;
    value?: string;
    descs: string[];
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${pixelToRem(490)};
    width: ${pixelToRem(325)};
    margin-right: ${pixelToRem(100)};
    background: var(--card);
    justify-content: space-between;
    padding-top: ${pixelToRem(50)};
    padding-bottom: ${pixelToRem(50)};
`;

export const Title = styled.p`
    color: var(--purple);
    font: var(--font-subtitle);
`;

export const SubTitle = styled.p`
    color: var(--gray);
    font: var(--font);
`;

export const Button = styled.div`
    background: var(--button-card);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: ${pixelToRem(150)};
    border-radius: ${pixelToRem(3)};
    padding-top: ${pixelToRem(10)};

    &:hover {
        background: var(--purple);

        p {
            color: var(--white);
        }
    }
`;

export const Desc = styled.p`
    color: var(--gray);
    font: var(--font-text);
`;

export const ButtonTitle = styled.p`
    color: var(--purple);
    font: var(--font-sub);
    margin-bottom: ${pixelToRem(10)};
`;

export const LineButton = styled.div`
    display: flex;
    flex-direction: row;
    min-height: ${pixelToRem(5)};
    max-height: ${pixelToRem(5)};
    width: ${pixelToRem(150)};
    background: var(--dark-purple);
`;