'use client'
import React, { FC, ReactNode, useState } from 'react';
import { CloseButton, Dialog, Portal } from '@chakra-ui/react';

interface IModalWindowProps {
  trigger: ReactNode;
  content: ReactNode;
}

export const ModalWindow: FC<IModalWindowProps> = ({ trigger, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} placement="center">
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content width="fit-content" height="fit-content" maxWidth="none" maxHeight="none" marginInline="16px" borderRadius={'8px'}>
            <Dialog.Body asChild>{content}</Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
