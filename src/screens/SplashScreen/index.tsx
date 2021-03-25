import React from 'react';

import { SectionView, SectionImage } from './styles';
import SplashLogo from '../../assets/img/SevenHousesLogo.png';

export const SplashScreen = (): JSX.Element => {
  return (
    <SectionView>
      <SectionImage source={SplashLogo} />
    </SectionView>
  );
};
