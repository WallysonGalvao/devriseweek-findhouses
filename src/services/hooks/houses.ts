import { getHousesCall, OptionalParamsProps } from '~/services/calls';
import { useHousesStore } from '~/services/stores';

export const useHousesHooks = () => {
  const {
    housesList,
    setHousesList,
    setLoadingHousesList,
    offset,
    setOffset,
    setParams,
  } = useHousesStore();

  const onGetHouses = async (params: OptionalParamsProps): Promise<void> => {
    setLoadingHousesList(true);
    const result = await getHousesCall(offset, { ...params });

    if (offset > 0) {
      const properties = result.properties
        ? [...housesList, ...result.properties]
        : housesList;
      setHousesList(properties);
    } else {
      setHousesList(result.properties);
    }

    setLoadingHousesList(false);
    setOffset(offset + 15);
  };

  const onFilterHouseList = async (
    params: OptionalParamsProps,
  ): Promise<void> => {
    setLoadingHousesList(true);
    setParams(params);
    const result = await getHousesCall(offset, { ...params });
    setHousesList(result.properties);
    setLoadingHousesList(false);
  };

  return { onGetHouses, onFilterHouseList };
};
