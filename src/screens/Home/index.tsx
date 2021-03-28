import React, { useEffect, useState, useCallback } from 'react';

import { useHousesStore } from '~/services/stores';
import { useHousesHooks } from '~/services/hooks';

import { Title, IconButton, Input, Loader } from '~/components';

import { HousesList, FilterMoal } from '~/components/organisms';

import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';

export const HomeScreen = (): JSX.Element => {
  const { onGetHouses } = useHousesHooks();
  const { housesList, loadingHousesList } = useHousesStore();

  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const toggleFilterModal = useCallback(() => {
    setFilterModalVisible(prevState => !prevState);
  }, []);

  useEffect(() => {
    onGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList
        data={housesList}
        loading={filterModalVisible}
        onEndReached={onGetHouses}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" onPress={toggleFilterModal} />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o endereço" />
          {loadingHousesList && <Loader />}
        </ContentContainer>
      </HousesList>
      {filterModalVisible && (
        <FilterMoal visible={filterModalVisible} onClose={toggleFilterModal} />
      )}
    </ScreenContainer>
  );
};
