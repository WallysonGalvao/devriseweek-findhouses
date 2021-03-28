import styled, { css } from 'styled-components/native';

type InputContainerProps = {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

export const InputContainer = styled.View<InputContainerProps>`
  ${({ theme, mt, mb, ml, mr }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
  `}
`;

export const InputText = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.metrics.px(48)}px;
    border-radius: ${theme.metrics.px(12)}px;
    background-color: ${theme.colors.backgroundLight};
    margin-top: ${theme.metrics.px(12)}px;
    font-family: ${theme.fonts.montserrat.regular};
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.white};
    padding-left: ${theme.metrics.px(12)}px;
  `}
`;
