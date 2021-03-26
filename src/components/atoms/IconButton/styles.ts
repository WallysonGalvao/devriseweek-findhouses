import styled, { css } from 'styled-components/native';

import { IconButtonProps } from '.';

type IconButtonContainerProps = Pick<IconButtonProps, 'transparent'>;

export const IconButtonContainer = styled.TouchableOpacity<IconButtonContainerProps>`
  ${({ theme, transparent }) => css`
    display: flex;
    width: ${theme.metrics.px(48)}px;
    height: ${theme.metrics.px(48)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.metrics.px(6)}px;
    background-color: ${transparent
      ? theme.colors.purpleTransparent
      : theme.colors.backgroundLight};
  `}
`;
