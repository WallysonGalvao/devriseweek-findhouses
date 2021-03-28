import styled, { css } from 'styled-components/native';

export const FeatureCardContainer = styled.View`
  ${({ theme }) => css`
    height: ${theme.metrics.px(80)}px;
    width: ${theme.metrics.px(80)}px;
    background-color: ${theme.colors.backgroundLight};

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.metrics.px(6)}px;
  `}
`;
