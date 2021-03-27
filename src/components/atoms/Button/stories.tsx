import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Button } from '.';
import { StoriesWrapper } from '~/components/atoms';

const stories = storiesOf('Button', module);
stories.addDecorator(getStory => <StoriesWrapper>{getStory()}</StoriesWrapper>);

stories.add('Standart', () => {
  const value = text('TextButton', 'Aplicar');
  return <Button text={value} />;
});
