import styled, { css } from 'styled-components/native';

export const SectionView = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.backgroundDark};
  `}
`;

export const SectionImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 150px;
  height: 150px;
`;
