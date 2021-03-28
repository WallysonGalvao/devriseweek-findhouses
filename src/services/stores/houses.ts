import create from 'zustand';

import { PropertiesProps } from '~/services/calls';

type State = {
  housesList: PropertiesProps[];
  setHousesList: (houses: PropertiesProps[]) => void;
  selectedHouse: PropertiesProps;
  setSelectedHouse: (house: PropertiesProps) => void;
};

export const useHousesStore = create<State>(set => ({
  housesList: [],
  setHousesList: housesList => set({ housesList }),

  selectedHouse: {} as PropertiesProps,
  setSelectedHouse: selectedHouse => set({ selectedHouse }),
}));
