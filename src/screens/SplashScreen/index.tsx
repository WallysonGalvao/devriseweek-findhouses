import React from 'react';

import { SectionView, SectionImage } from './styles';
import SplashLogo from '../../assets/img/SevenHousesLogo.png';

export const SplashScreen = () => {
  return (
    <SectionView>
      <SectionImage source={SplashLogo} />
    </SectionView>
  );
};
