import styled, { css } from 'styled-components/native';

export const ModalContainer = styled.Modal`
  ${({ theme }) => css`
    display: flex;
    width: ${theme.metrics.wp(100)}px;
    height: ${theme.metrics.hp(100)}px;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}
`;

export const ModalBackground = styled.View`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: ${theme.colors.darkTransparent};
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
    height: ${theme.metrics.hp(86)}px;
    background-color: ${theme.colors.backgroundDark};
    border-top-right-radius: ${theme.metrics.px(24)}px;
    border-top-left-radius: ${theme.metrics.px(24)}px;
    position: absolute;
    bottom: 0;
  `}
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
