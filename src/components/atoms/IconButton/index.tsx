import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { IconButtonContainer } from './styles';

export type IconButtonProps = {
  onPress?: () => void;
  transparent?: boolean;
  iconName: string;
  fill?: boolean;
};

export const IconButton = ({
  onPress,
  transparent = false,
  iconName,
  fill = false,
}: IconButtonProps): JSX.Element => {
  return (
    <IconButtonContainer transparent={transparent} onPress={onPress}>
      <Icon name={iconName} color={fill ? 'yellow' : 'white'} size={20} />
    </IconButtonContainer>
  );
};
