import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { HousesList } from '.';
import { StoriesWrapper } from '~/components/atoms';

const IMAGE_URL_MOCK =
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80';

const stories = storiesOf('HousesList', module);
stories.addDecorator(getStory => <StoriesWrapper>{getStory()}</StoriesWrapper>);

stories.add('Standart', () => {
  const mockArray = [
    {
      property_id: '12345',
      address: {
        line: 'Minha casa bonita',
        state: 'BH',
        neighborhood_name: 'Savassi',
      },
      community: {
        price_max: 500,
      },
      photos: [
        {
          href: IMAGE_URL_MOCK,
        },
      ],
    },
    {
      property_id: '12346',
      address: {
        line: 'Minha casa bonita',
        state: 'BH',
        neighborhood_name: 'Savassi',
      },
      community: {
        price_max: 500,
      },
      photos: [
        {
          href: IMAGE_URL_MOCK,
        },
      ],
    },
  ];

  return <HousesList data={mockArray} />;
});
