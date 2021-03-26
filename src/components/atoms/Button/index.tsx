import React from 'react';

import { ButtonText } from '~/components/atoms/Text';
import { ButtonContainer } from './styles';

type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps): JSX.Element => {
  return (
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
