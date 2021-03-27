import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { IconButton } from '.';
import { StoriesWrapper } from '~/components/atoms';

const stories = storiesOf('IconButton', module);
stories.addDecorator(getStory => <StoriesWrapper>{getStory()}</StoriesWrapper>);

stories.add('Standart', () => {
  const value = text('icon', 'filter');
  return <IconButton iconName={value} />;
});

stories.add('Transparent', () => {
  const value = text('icon', 'filter');
  return <IconButton iconName={value} transparent />;
});
