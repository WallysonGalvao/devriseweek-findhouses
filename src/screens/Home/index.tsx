import React, { useEffect, useState, useCallback } from 'react';

import { getHousesCall, PropertiesProps } from '~/services/calls';

import { Title, IconButton, Input, DetailText } from '~/components';
import { HousesList } from '~/components/organisms/HousesList';

import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
  LoaderContainer,
  Loader,
} from './styles';

export const HomeScreen = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [housesListData, setHousesListData] = useState<PropertiesProps[]>([]);

  const callGetHouses = useCallback(async () => {
    const result = await getHousesCall();
    setHousesListData(result.properties);
    setLoading(false);
  }, []);

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList loading={loading} data={housesListData}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o endereço" />
          {loading && (
            <LoaderContainer>
              <Loader size="large" color="white" />
              <DetailText>Carregando...</DetailText>
            </LoaderContainer>
          )}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
