import React, { useEffect, useState, useCallback } from 'react';

import { getHousesCall, PropertiesProps } from '~/services/calls';

import { Title, IconButton, Input } from '~/components';
import { HousesList } from '~/components/organisms/HousesList';

import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';

export const HomeScreen = (): JSX.Element => {
  const [housesListData, setHousesListData] = useState<PropertiesProps[]>([]);

  const callGetHouses = useCallback(async () => {
    const result = await getHousesCall();
    setHousesListData(result.properties);
  }, []);

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesListData}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o endereço" />
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
