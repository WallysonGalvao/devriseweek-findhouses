/* eslint-disable camelcase */
import api from './api';

export type PropertiesProps = {
  property_id: string;
  address: {
    line: string;
    state: string;
    neighborhood_name: string;
  };
  lot_size: {
    size: number;
    units: string;
  };
  community: {
    baths_max: number;
    baths_min: number;
    beds_max: number;
    beds_min: number;
    price_max: number;
  };
  photos: {
    href: string;
  }[];
  features?: {
    text: string[];
  }[];
};

type ResponseProps = {
  properties: PropertiesProps[];
};

export type OptionalParamsProps = {
  sizeMin?: string;
  sizeMax?: string;
  priceMin?: string;
  priceMax?: string;
  bedsMin?: string;
  bathsMin?: string;
};

export const getHousesCall = async (
  offset: number,
  optionalParams: OptionalParamsProps,
): Promise<ResponseProps> => {
  try {
    const requiredParams = {
      city: 'Miami',
      state_code: 'FL',
      limit: 15,
      offset,
      sort: 'relevance',
    };

    const result = await api.get('properties/v2/list-for-rent', {
      params: { ...requiredParams, ...optionalParams },
    });
    // console.log(JSON.stringify(result));
    return result.data;
  } catch (error) {
    return error;
  }
};

export const getHouseDetail = async (
  property_id: string,
): Promise<ResponseProps> => {
  try {
    const result = await api.get('/properties/v2/detail', {
      params: {
        property_id,
      },
    });
    return result.data;
  } catch (error) {
    return error;
  }
};
