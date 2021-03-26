import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { IconButtonContainer } from './styles';

export type IconButtonProps = {
  transparent?: boolean;
  iconName: string;
};

export const IconButton = ({
  transparent = false,
  iconName,
}: IconButtonProps): JSX.Element => {
  return (
    <IconButtonContainer transparent={transparent}>
      <Icon name={iconName} color="white" size={20} />
    </IconButtonContainer>
  );
};
