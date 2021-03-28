import React from 'react';

import { ButtonText } from '~/components/atoms/Text';
import { ButtonContainer } from './styles';

type ButtonProps = {
  text: string;
  mt: number;
  onPress: () => void;
};

export const Button = ({
  text,
  onPress,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <ButtonContainer onPress={onPress} {...props}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
