import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export interface CommentCardProps {
    url?: string;
    name?: string ;
    comment?: string
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: ${pixelToRem(10)};
`;

export const Image = styled.div<CommentCardProps>`
    width: ${pixelToRem(100)};
    height: ${pixelToRem(100)};
    background: var(--dark-purple);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: ${pixelToRem(50)};
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Name = styled.p`
    color: var(--white);
`;

export const Comentary = styled.p`
    color: var(--white);
`;

