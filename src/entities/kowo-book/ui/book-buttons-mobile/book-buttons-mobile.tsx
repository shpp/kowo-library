import { IBookStatusProps } from '@/shared/ui/book-status';
import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BookApiResponse } from '../kowo-book';
import { ModalWindow } from '@/shared/ui/modal-window';
import { QueueUp } from '@/features/queue-up';

interface IBookButtonsProps {
  available: IBookStatusProps;
  bookData: BookApiResponse;
}

export const BookButtonsMobile: FC<IBookButtonsProps> = ({
  available,
  bookData,
}) => {
  return (
    <ModalWindow
      trigger={
        <Button visual={available.isAvailable ? 'kowo_red' : 'kowo_white'} size={'sm'} width={'100%'}>
          {available.isAvailable ? 'Забронювати' : 'Стати в чергу'}
        </Button>
      }
      content={<QueueUp book={bookData} type={available.isAvailable ? 'book' : 'queue'} />}
    />
  );
};
