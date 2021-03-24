import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { SplashScreen } from './screens';

import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" />
      <SplashScreen />
    </ThemeProvider>
  );
};

export default App;
