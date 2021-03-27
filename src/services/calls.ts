/* eslint-disable camelcase */
import api from './api';

export type PropertiesProps = {
  property_id: string;
  address: {
    line: string;
    state: string;
    neighborhood_name: string;
  };
  community: {
    price_max: number;
  };
  photos: {
    href: string;
  }[];
};

type RentResponseProps = {
  properties: PropertiesProps[];
};

export const getHousesCall = async (): Promise<RentResponseProps> => {
  try {
    const result = await api.get('properties/v2/list-for-rent', {
      params: {
        city: 'Miami',
        state_code: 'FL',
        limit: 15,
        offset: 0,
        sort: 'relevance',
      },
    });
    return result.data;
  } catch (error) {
    return error;
  }
};
