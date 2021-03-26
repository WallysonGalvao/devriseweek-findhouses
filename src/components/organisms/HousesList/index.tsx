import React from 'react';

import { HouseCard } from '~/components/molecules';
import { PropertiesProps } from '~/services/calls';

import { HouseListContainer } from './styles';

type HousesListProps = {
  data: PropertiesProps[];
  children: React.ReactElement;
};

export const HousesList = ({
  data,
  children,
}: HousesListProps): JSX.Element => {
  const keyExtractor = (item: PropertiesProps) => {
    return item.property_id;
  };

  const renderItem = ({ item }: { item: PropertiesProps }) => {
    return (
      <HouseCard
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
    />
  );
};
