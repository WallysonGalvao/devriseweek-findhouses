import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');
const FIGMA_WIDTH = 375;

const wp = (widthPercent: number): number => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(String(widthPercent))) / 100,
  );

  return screenPixel;
};

const hp = (heightPercent: number): number => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (height * parseFloat(String(heightPercent))) / 100,
  );

  return screenPixel;
};

const px = (valuePx: number): number => {
  const widthPercent = (valuePx / FIGMA_WIDTH) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(String(widthPercent))) / 100,
  );

  return screenPixel;
};

export const metrics = { wp, hp, px };
