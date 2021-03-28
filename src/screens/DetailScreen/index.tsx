import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useHousesStore } from '~/services/stores';
import { getHouseDetail, PropertiesProps } from '~/services/calls';

import {
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  HouseFeatureCard,
  IconButton,
  Loader,
} from '~/components';

import {
  ScreenContainer,
  ImageBackground,
  BottomScreenContainer,
  FeaturesContainer,
} from './styles';

export const DetailScreen = (): JSX.Element => {
  const { goBack } = useNavigation();
  const { selectedHouse } = useHousesStore();

  const [loading, setLoading] = useState(true);
  const [houseDetail, setHouseDetail] = useState<PropertiesProps>(
    {} as PropertiesProps,
  );

  const formattedPrice = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
    [],
  );

  const onClickArrowBack = useCallback(() => goBack(), []);

  const callGetHouseDetail = useCallback(async () => {
    const result = await getHouseDetail(selectedHouse.property_id);
    setHouseDetail(result.properties[0]);
    setLoading(false);
  }, []);

  useEffect(() => {
    callGetHouseDetail();
  }, []);

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedHouse.photos[0].href }}>
        <IconButton
          onPress={onClickArrowBack}
          iconName="chevron-back"
          transparent
        />
        <IconButton
          onPress={onClickArrowBack}
          iconName="star-outline"
          transparent
        />
      </ImageBackground>
      <BottomScreenContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            <DetailTitle>{houseDetail.address.line}</DetailTitle>
            <DetailSubTitle>
              {formattedPrice.format(houseDetail.community.price_max)}
            </DetailSubTitle>
            <DetailText>{`${houseDetail.address.neighborhood_name}-${houseDetail.address.state}`}</DetailText>

            <DetailSectionTitle mt={24} mb={12}>
              Detalhes
            </DetailSectionTitle>
            <FeaturesContainer>
              <HouseFeatureCard
                iconLib="materialcommunity"
                iconName="arrow-collapse-all"
                featureText={`${houseDetail.lot_size.size} ${houseDetail.lot_size.units}`}
              />
              <HouseFeatureCard
                iconLib="materialcommunity"
                iconName="bed-king-outline"
                featureText={`${houseDetail.community.beds_min}-${houseDetail.community.beds_max} beds`}
              />
              <HouseFeatureCard
                iconLib="fontawesome"
                iconName="bath"
                featureText={`${houseDetail.community.baths_min}-${houseDetail.community.baths_max} baths`}
              />
            </FeaturesContainer>

            <DetailSectionTitle mt={24} mb={12}>
              Vantagens do Imóvel
            </DetailSectionTitle>
            {houseDetail?.features &&
              houseDetail.features[1].text.map(item => (
                <DetailText key={item} mb={2}>{`-${item}`}</DetailText>
              ))}
          </>
        )}
      </BottomScreenContainer>
    </ScreenContainer>
  );
};
