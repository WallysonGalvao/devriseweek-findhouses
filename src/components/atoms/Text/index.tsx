import styled, { css } from 'styled-components/native';

type BaseTextProps = {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

export const BaseText = styled.Text<BaseTextProps>`
  ${({ theme, mt, mb, ml, mr }) => css`
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
  `}
`;

export const Title = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(28)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

export const InputSectionLabel = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.montserrat.semibold};
  `}
`;

export const InputLabel = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(14)}px;
    font-family: ${theme.fonts.montserrat.semibold};
  `}
`;

export const ButtonText = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(22)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

// DetailTexts:

export const DetailTitle = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(24)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

export const DetailSubTitle = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(18)}px;
  `}
`;

export const DetailText = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(14)}px;
    font-family: ${theme.fonts.montserrat.regular};
  `}
`;

export const DetailSectionTitle = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(20)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

// CardTexts:

export const CardTitle = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(14)}px;
    font-family: ${theme.fonts.montserrat.bold};
  `}
`;

export const CardDescription = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(10)}px;
    font-family: ${theme.fonts.montserrat.regular};
  `}
`;

export const CardHightLightText = styled(BaseText)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.montserrat.semibold};
  `}
`;
