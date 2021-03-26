import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { PropertiesProps } from '~/services/calls';

export const HouseListContainer = styled(
  FlatList as new () => FlatList<PropertiesProps>,
).attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;
