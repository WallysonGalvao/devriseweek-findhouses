import styled, { css } from 'styled-components/native';

export const ScreenContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${theme.colors.backgroundDark};
    padding: ${theme.metrics.px(24)}px;
    padding-top: ${theme.metrics.px(50)}px;
  `}
`;

export const TopContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: ${theme.metrics.px(48)}px;
  `}
`;

export const TitleContainer = styled.View`
  width: 60%;
`;
