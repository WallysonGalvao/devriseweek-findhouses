import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Navigator } from '~/routes';

import StoryBook from '../storybook';

import { theme } from './styles/theme';

Ionicons.loadFont();

const App = (): JSX.Element => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor={theme.colors.backgroundDark} />
      <Navigator />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
