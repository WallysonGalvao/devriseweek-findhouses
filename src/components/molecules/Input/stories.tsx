import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Input } from '.';
import { StoriesWrapper } from '~/components/atoms';

const stories = storiesOf('Input', module);
stories.addDecorator(getStory => <StoriesWrapper>{getStory()}</StoriesWrapper>);

stories.add('Standart', () => {
  const placeholder = text('Placeholder', 'Digite aqui a localização');
  const label = text('Label', 'Localização');
  return <Input label={label} placeholder={placeholder} />;
});
