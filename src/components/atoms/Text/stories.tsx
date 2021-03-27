import React from 'react';
import styled, { css } from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import {
  Title,
  InputLabel,
  ButtonText,
  DetailTitle,
  DetailSubTitle,
  DetailText,
  DetailSectionTitle,
  CardTitle,
  CardDescription,
  CardHightLightText,
} from '.';

const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.backgroundDark};
  `}
`;

const stories = storiesOf('Text', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Title', () => {
  const value = text('Title', 'Exemplo de Title');
  return <Title>{value}</Title>;
});

stories.add('InputLabel', () => {
  const value = text('InputLabel', 'Exemplo de InputLabel');
  return <InputLabel>{value}</InputLabel>;
});

stories.add('ButtonText', () => {
  const value = text('ButtonText', 'Exemplo de ButtonText');
  return <ButtonText>{value}</ButtonText>;
});

stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'Exemplo de DetailTitle');
  return <DetailTitle>{value}</DetailTitle>;
});

stories.add('DetailSubTitle', () => {
  const value = text('DetailSubTitle', 'Exemplo de DetailSubTitle');
  return <DetailSubTitle>{value}</DetailSubTitle>;
});

stories.add('DetailText', () => {
  const value = text('DetailText', 'Exemplo de DetailText');
  return <DetailText>{value}</DetailText>;
});

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'Exemplo de DetailSectionTitle');
  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});

stories.add('CardTitle', () => {
  const value = text('CardTitle', 'Exemplo de CardTitle');
  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardDescription', () => {
  const value = text('CardDescription', 'Exemplo de Description');
  return <CardDescription>{value}</CardDescription>;
});

stories.add('CardHightLightText', () => {
  const value = text('CardHightLightText', 'U$ 222.22');
  return <CardHightLightText>{value}</CardHightLightText>;
});
