import styled from 'styled-components';
import { pixelToRem } from '../../utils/functions';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: ${pixelToRem(158)};
`;

export const Logo = styled.p`
    margin-top: ${pixelToRem(65)};
    color: var(--white);
    font: var(--font-logo);

    .first {
        color: var(--gold);
    }

    .last {
        color: var(--purple);
    }
`;

export const Title = styled.p`
    color: var(--white);
    font: var(--font-title);
    margin-top: ${pixelToRem(0)};
`;

export const ContainerTitle = styled.div`
    display: flex;
    width: ${pixelToRem(771)};
    margin-top: ${pixelToRem(68)};
    margin-bottom: ${pixelToRem(20)};
`;

export const ContainerSubtitle = styled.div`
    display: flex;
    width: ${pixelToRem(631)};
    margin-bottom: ${pixelToRem(25)};
`;

export const Subtitle = styled.div`
    color: var(--gold);
    font: var(--font-sub);
`;

export const ContainerTitles = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-right: ${pixelToRem(100)};
`;

export const NotebookImage = styled.div`
    width: ${pixelToRem(600)};
    height: ${pixelToRem(580)};
    background-image: url("/images/notebook.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: ${pixelToRem(80)};
`;
