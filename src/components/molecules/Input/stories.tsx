import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import styled, { css } from 'styled-components/native';
import { Input } from '.';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.backgroundDark};
    padding: ${theme.metrics.px(24)}px;
  `}
`;

const stories = storiesOf('Input', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standart', () => {
  const placeholder = text('Placeholder', 'Digite aqui a localização');
  const label = text('Label', 'Localização');
  return <Input label={label} placeholder={placeholder} />;
});
