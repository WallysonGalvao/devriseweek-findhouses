import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(28)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.montserrat.semibold};
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(22)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

// DetailTexts:

export const DetailTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(24)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

export const DetailSubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(18)}px;
  `}
`;

export const DetailText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(14)}px;
    font-family: ${theme.fonts.montserrat.regular};
  `}
`;

export const DetailSectionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(20)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

// CardTexts:

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(14)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

export const CardDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(10)}px;
    font-family: ${theme.fonts.montserrat.regular};
  `}
`;

export const CardHightLightText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.montserrat.semibold};
  `}
`;
