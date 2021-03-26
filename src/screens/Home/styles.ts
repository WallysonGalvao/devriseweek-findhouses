import styled, { css } from 'styled-components/native';

export const ScreenScroll = styled.ScrollView``;

export const ScreenContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${theme.colors.backgroundDark};
  `}
`;

export const ContentContainer = styled.View`
  ${({ theme }) => css`
    width: ${theme.metrics.wp(100)}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${theme.metrics.px(24)}px;
  `}
`;

export const TopContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.metrics.px(20)}px;
    padding-top: ${theme.metrics.px(20)}px;
  `}
`;

export const TitleContainer = styled.View`
  width: 65%;
`;
