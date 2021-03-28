import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { DetailText } from '~/components/atoms';

import { FeatureCardContainer } from './styles';

export type IconButtonProps = {
  featureText: string;
  iconName: string;
  iconLib?: 'materialcommunity' | 'fontawesome';
};

export const HouseFeatureCard = ({
  featureText,
  iconName,
  iconLib = 'fontawesome',
}: IconButtonProps): JSX.Element => {
  return (
    <FeatureCardContainer>
      {iconLib === 'fontawesome' ? (
        <IconFontAwesome name={iconName} color="white" size={36} />
      ) : (
        <Icon name={iconName} color="white" size={36} />
      )}

      <DetailText>{featureText}</DetailText>
    </FeatureCardContainer>
  );
};
