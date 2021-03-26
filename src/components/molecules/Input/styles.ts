import styled, { css } from 'styled-components/native';

export const InputContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InputText = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.metrics.px(48)}px;
    border-radius: ${theme.metrics.px(12)}px;
    background-color: ${theme.colors.backgroundLight};
    margin-top: ${theme.metrics.px(12)}px;
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.white};
    padding-left: ${theme.metrics.px(12)}px;
  `}
`;
