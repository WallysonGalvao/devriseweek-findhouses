import styled, { css } from 'styled-components/native';

export const ScreenContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${theme.colors.backgroundDark};
  `}
`;

export const ImageBackground = styled.ImageBackground`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40%;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: ${theme.metrics.px(48)}px;
    padding-horizontal: ${theme.metrics.px(24)}px;
  `}
`;

export const BottomScreenContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: 48,
  },
})`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.metrics.px(24)}px;
    width: 100%;
    height: ${theme.metrics.hp(65)}px;
    background-color: ${theme.colors.backgroundDark};
    border-top-right-radius: ${theme.metrics.px(24)}px;
    border-top-left-radius: ${theme.metrics.px(24)}px;
    position: absolute;
    bottom: 0;
  `}
`;

export const FeaturesContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    height: ${theme.metrics.hp(12)}px;
  `}
`;
