import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { HouseCard } from '.';
import { StoriesWrapper } from '~/components/atoms';

const IMAGE_URL_MOCK =
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80';

const stories = storiesOf('HouseCard', module);
stories.addDecorator(getStory => <StoriesWrapper>{getStory()}</StoriesWrapper>);

stories.add('Standart', () => {
  const imageSource = text('ImageSource', IMAGE_URL_MOCK);
  const title = text('Title', 'Minha Casa Bonita');
  const description = text(
    'Description',
    'Av Getulio Vargas, 1000 - Belo Horizonte',
  );
  const price = number('Price', 200);

  return (
    <HouseCard
      imageSource={imageSource}
      title={title}
      description={description}
      price={price}
    />
  );
});
