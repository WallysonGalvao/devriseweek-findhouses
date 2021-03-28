import styled, { css } from 'styled-components/native';

export const LoaderContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.metrics.px(48)}px;
  `}
`;

export const LoaderIndicator = styled.ActivityIndicator`
  ${({ theme }) => css`
    margin-bottom: ${theme.metrics.px(12)}px;
  `}
`;
