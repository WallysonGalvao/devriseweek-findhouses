import React, { useEffect, useState, useCallback } from 'react';

import { useHousesStore } from '~/services/stores';
import { getHousesCall } from '~/services/calls';

import { Title, IconButton, Input, Loader } from '~/components';

import { HousesList } from '~/components/organisms/HousesList';

import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';

export const HomeScreen = (): JSX.Element => {
  const { housesList, setHousesList } = useHousesStore();
  const [loading, setLoading] = useState(true);

  const callGetHouses = useCallback(async () => {
    const result = await getHousesCall();
    setHousesList(result.properties);
    setLoading(false);
  }, []);

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesList}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o endereço" />
          {loading && <Loader />}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
