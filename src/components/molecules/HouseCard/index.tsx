import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '~/routes';
import { useHousesStore } from '~/services/stores';
import { PropertiesProps } from '~/services/calls';

import { CardTitle, CardHightLightText, CardDescription } from '~/components';

import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

type HouseCardProps = {
  item: PropertiesProps;
  imageSource: string;
  title: string;
  description: string;
  price: number;
};

type HouseCardNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HouseCard = ({
  item,
  imageSource,
  title,
  description,
  price,
}: HouseCardProps): JSX.Element => {
  const { navigate } = useNavigation<HouseCardNavigationProp>();
  const { setSelectedHouse } = useHousesStore();

  const formattedPrice = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
    [],
  );

  const onClickItemContainer = useCallback(() => {
    setSelectedHouse(item);
    navigate('Detail');
  }, []);

  return (
    <CardContainer onPress={onClickItemContainer}>
      <CardImage source={{ uri: imageSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHightLightText>
            {formattedPrice.format(price)}
          </CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
