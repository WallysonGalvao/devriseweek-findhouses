import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '~/routes';

import SplashLogo from '~/assets/img/SevenHousesLogo.png';

import { SectionView, SectionImage } from './styles';

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;

export const SplashScreen = (): JSX.Element => {
  const { navigate } = useNavigation<SplashScreenNavigationProp>();

  const goToHomeScreen = useCallback(() => {
    setTimeout(() => {
      navigate('Home');
    }, 3000);
  }, []);

  useEffect(() => {
    goToHomeScreen();
  }, []);

  return (
    <SectionView>
      <SectionImage source={SplashLogo} />
    </SectionView>
  );
};
