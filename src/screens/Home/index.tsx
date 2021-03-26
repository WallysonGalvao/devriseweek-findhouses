import React from 'react';

import { Title, IconButton, Input } from '~/components';

import { ScreenContainer, TopContainer, TitleContainer } from './styles';

export const HomeScreen = (): JSX.Element => {
  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Encontre aqui seu imóvel</Title>
        </TitleContainer>
        <IconButton iconName="filter" />
      </TopContainer>

      <Input label="Localização" placeholder="Digite o endereço" />
    </ScreenContainer>
  );
};
