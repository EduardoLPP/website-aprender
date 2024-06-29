import styled from "styled-components";
import { pixelToRem } from "../../utils/functions";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerCards = styled.div`
    margin-top: ${pixelToRem(100)};
    padding-left: ${pixelToRem(138)};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: ${pixelToRem(138)};
    margin-bottom: ${pixelToRem(100)};
`;

export const ContainerComments = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${pixelToRem(175)};
    padding-left: ${pixelToRem(250)};
    padding-right: ${pixelToRem(250)};
`;

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${pixelToRem(250)};
    padding-right: ${pixelToRem(250)};
    margin-bottom: ${pixelToRem(150)};
`;