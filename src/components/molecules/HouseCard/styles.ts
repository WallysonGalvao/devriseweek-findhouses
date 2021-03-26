import styled, { css } from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${theme.metrics.wp(86)}px;
    height: ${theme.metrics.px(240)}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: ${theme.metrics.px(24)}px;
    background-color: ${theme.colors.backgroundLight};
    margin-top: ${theme.metrics.px(24)}px;
    overflow: hidden;
  `}
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 70%;
`;

export const TextContainer = styled.View`
  ${({ theme }) => css`
    height: 30%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-vertical: ${theme.metrics.px(12)}px;
    padding-horizontal: ${theme.metrics.px(14)}px;
  `}
`;

export const TextContainerLeft = styled.View`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextContainerRight = styled.View`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
