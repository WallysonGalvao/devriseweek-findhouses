import create from 'zustand';

import { PropertiesProps, OptionalParamsProps } from '~/services/calls';

type State = {
  offset: number;
  setOffset: (offset: number) => void;

  loadingHousesList: boolean;
  setLoadingHousesList: (loading: boolean) => void;

  housesList: PropertiesProps[];
  setHousesList: (houses: PropertiesProps[]) => void;

  selectedHouse: PropertiesProps;
  setSelectedHouse: (house: PropertiesProps) => void;

  params: OptionalParamsProps;
  setParams: (params: OptionalParamsProps) => void;
};

export const useHousesStore = create<State>(set => ({
  offset: 0,
  setOffset: (offset: number) => set({ offset }),

  loadingHousesList: true,
  setLoadingHousesList: loadingHousesList => set({ loadingHousesList }),

  housesList: [],
  setHousesList: housesList => set({ housesList }),

  selectedHouse: {} as PropertiesProps,
  setSelectedHouse: selectedHouse => set({ selectedHouse }),

  params: {} as OptionalParamsProps,
  setParams: params => set({ params }),
}));
