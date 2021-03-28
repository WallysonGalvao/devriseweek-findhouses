import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen, HomeScreen, DetailScreen } from '~/screens';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Detail: undefined;
};

export const Navigator = (): JSX.Element => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
