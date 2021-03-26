import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import styled, { css } from 'styled-components/native';
import { IconButton } from '.';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.backgroundDark};
    padding: ${theme.metrics.px(24)}px;
  `}
`;

const stories = storiesOf('IconButton', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standart', () => {
  const value = text('icon', 'filter');
  return <IconButton iconName={value} />;
});

stories.add('Transparent', () => {
  const value = text('icon', 'filter');
  return <IconButton iconName={value} transparent />;
});
