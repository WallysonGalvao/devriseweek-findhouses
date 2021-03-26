import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: ${theme.metrics.px(56)}px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.backgroundDark};
    border-color: ${theme.colors.primary};
    border-width: ${theme.metrics.px(2)}px;
    border-radius: ${theme.metrics.px(12)}px;
  `}
`;
