import React from 'react';

import { Title, IconButton } from '~/components/atoms';

import {
  ModalContainer,
  ModalBackground,
  BottomScreenContainer,
  HeaderContainer,
} from './styles';

type ModalProps = {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({
  title,
  visible,
  children,
  onClose,
}: ModalProps): JSX.Element => {
  return (
    <ModalContainer transparent visible={visible} onRequestClose={onClose}>
      <ModalBackground>
        <BottomScreenContainer>
          <HeaderContainer>
            <Title>{title}</Title>
            <IconButton iconName="close" onPress={onClose} />
          </HeaderContainer>
          {children}
        </BottomScreenContainer>
      </ModalBackground>
    </ModalContainer>
  );
};
