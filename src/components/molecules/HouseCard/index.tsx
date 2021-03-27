import React from 'react';

import { CardTitle, CardHightLightText, CardDescription } from '~/components';

import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

type HouseCardProps = {
  imageSource: string;
  title: string;
  description: string;
  price: number;
};

export const HouseCard = ({
  imageSource,
  title,
  description,
  price,
}: HouseCardProps): JSX.Element => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <CardContainer>
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
