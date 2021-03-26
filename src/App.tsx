import React from 'react';
import { StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeProvider } from 'styled-components/native';

import { SplashScreen, HomeScreen } from './screens';
import StoryBook from '../storybook';

import { theme } from './styles/theme';

Ionicons.loadFont();

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <StatusBar translucent backgroundColor="transparent" />
    <HomeScreen />
  </ThemeProvider>
);

export default App;
