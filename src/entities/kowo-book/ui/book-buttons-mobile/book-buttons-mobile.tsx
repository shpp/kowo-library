import { IBookStatusProps } from '@/shared/ui/book-status';
import { Button, Box } from '@chakra-ui/react';
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
  if (available.isAvailable) {
    return (
      <React.Fragment>
        {available.whenAvailable === 'now' ? (
          <ModalWindow
            trigger={
              <Button visual={'kowo_red'} size={'sm'} width={'100%'}>
                Забронювати
              </Button>
            }
            content={<QueueUp book={bookData} type="book" />}
          />
        ) : (
          <ModalWindow
            trigger={
              <Button visual={'kowo_white'} size={'sm'} width={'100%'}>
                Встати в чергу
              </Button>
            }
            content={<QueueUp book={bookData} type="queue" />}
          />
        )}
      </React.Fragment>
    );
  } else return <Box width={'100%'} height={'33px'} />;
};
