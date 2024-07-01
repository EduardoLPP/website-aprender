import styled from 'styled-components';
import { pixelToRem } from '../../utils/functions';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: ${pixelToRem(158)};
    margin-bottom: ${pixelToRem(50)};
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

export const TranslateButton = styled.button`
  background: var(--dark-purple);
  border: none;
  border-radius: ${pixelToRem(3)};
  cursor: pointer;
  margin-right: ${pixelToRem(10)};
  margin-top: -55px;
  padding: ${pixelToRem(20)};
  height: ${pixelToRem(50)};
  position: absolute;
  right: ${pixelToRem(0)};
  top: ${pixelToRem(50)};

  &:hover{
    background: var(--purple);
  }
`;

export const TranslateText = styled.p`
  font: var(--font-text);
  color: var(--white);
  font-size: ${pixelToRem(15)};

  &:hover{
    color: var(--white);
  }
`;