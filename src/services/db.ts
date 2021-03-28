import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_KEY = '@FindHouses:Favorites';

type Error = {
  error: string;
};

export const saveData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log({ error: e });
  }
};

export const getData = async (key: string): Promise<string[] | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    console.log({ error: e });
  }
  return null;
};

export const saveHouseAsFavorite = async (
  houseId: string,
): Promise<string | Error> => {
  const savedFavorites = await getData(FAVORITE_KEY);

  if (savedFavorites) {
    if (savedFavorites.find(h => h === houseId)) {
      return { error: 'Imóvel já é favorito.' };
    }
    savedFavorites.push(houseId);
    await saveData(FAVORITE_KEY, JSON.stringify(savedFavorites));
  } else {
    const newArray = new Array(houseId);
    const arrayFavorites = JSON.stringify(newArray);
    await saveData(FAVORITE_KEY, arrayFavorites);
  }

  return '';
};

export const getIfHouseIsFavorite = async (
  houseId: string,
): Promise<boolean> => {
  const savedFavorites = await getData(FAVORITE_KEY);
  if (savedFavorites) return savedFavorites.some(h => h === houseId);
  return false;
};

export const removeHouseAsFavorite = async (
  houseId: string,
): Promise<string | Error> => {
  const savedFavorites = await getData(FAVORITE_KEY);

  if (savedFavorites) {
    const newSavedFavorite = savedFavorites.filter(h => h !== houseId);
    await saveData(FAVORITE_KEY, JSON.stringify(newSavedFavorite));
  } else {
    return {
      error: 'Imóvel não é favorito.',
    };
  }

  return '';
};
