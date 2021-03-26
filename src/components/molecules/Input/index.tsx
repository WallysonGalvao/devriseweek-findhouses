import React from 'react';

import { InputLabel } from '~/components/atoms';

import { InputContainer, InputText } from './styles';

type InputProps = {
  label: string;
  placeholder: string;
};

export const Input = ({ label, placeholder }: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText placeholder={placeholder} placeholderTextColor="white" />
    </InputContainer>
  );
};
