import React from 'react';

import { DetailText } from '~/components';

import { LoaderContainer, LoaderIndicator } from './styles';

type LoaderProps = {
  text?: string;
};

export const Loader = ({ text }: LoaderProps): JSX.Element => {
  return (
    <LoaderContainer>
      <LoaderIndicator size="large" color="white" />
      <DetailText>{text || 'Carregando...'}</DetailText>
    </LoaderContainer>
  );
};
