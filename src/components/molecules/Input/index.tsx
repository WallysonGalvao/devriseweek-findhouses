import React from 'react';
import { TextInputProps } from 'react-native';
import { InputLabel } from '~/components/atoms';

import { InputContainer, InputText } from './styles';

type InputProps = {
  label: string;
  placeholder: string;
} & TextInputProps;

export const Input = ({
  label,
  placeholder,
  ...props
}: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText
        {...props}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
    </InputContainer>
  );
};
