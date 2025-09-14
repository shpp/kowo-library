import React, { FC, ReactNode } from 'react';
import {
  DrawerBackdrop,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from './drawer-lib';

interface IDrawerWrapperProps {
  trigger: ReactNode;
  content: ReactNode;
}

export const DrawerWrapper: FC<IDrawerWrapperProps> = ({
  trigger,
  content,
}) => {
  return (
    <DrawerRoot placement="start">
      <DrawerBackdrop />
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent width={{ base: '100%', sm: '400px' }} maxWidth="none">
        {content}
      </DrawerContent>
    </DrawerRoot>
  );
};
