import React from 'react';

import SplashLogo from '~/assets/img/SevenHousesLogo.png';

import { SectionView, SectionImage } from './styles';

export const SplashScreen = (): JSX.Element => {
  return (
    <SectionView>
      <SectionImage source={SplashLogo} />
    </SectionView>
  );
};
