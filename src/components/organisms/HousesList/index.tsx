import React from 'react';

import { HouseCard } from '~/components/molecules';
import { PropertiesProps } from '~/services/calls';

import { HouseListContainer } from './styles';

type HousesListProps = {
  loading: boolean;
  data: PropertiesProps[];
  children?: React.ReactElement;
  onEndReached: () => Promise<void>;
};

export const HousesList = ({
  loading,
  data,
  children,
  onEndReached,
}: HousesListProps): JSX.Element => {
  const keyExtractor = (item: PropertiesProps) => {
    return item.property_id;
  };

  const renderItem = ({ item }: { item: PropertiesProps }) => {
    return (
      <HouseCard
        item={item}
        title={item.address.line}
        description={`${item.address.neighborhood_name} - ${item.address.state}`}
        imageSource={item.photos[0].href}
        price={item.community.price_max}
      />
    );
  };

  return (
    <HouseListContainer
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={children}
      refreshing={loading}
      onEndReached={onEndReached}
    />
  );
};
