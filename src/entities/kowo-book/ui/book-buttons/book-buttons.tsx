import { IBookStatusProps } from '@/shared/ui/book-status';
import { Button, Center } from '@chakra-ui/react';
import React, { FC } from 'react';

import styles from './../kowo-book.module.css';
import { ModalWindow } from '@/shared/ui/modal-window';
import { QueueUp } from '@/features/queue-up';
import { BookApiResponse } from '../kowo-book';

interface IBookButtonsProps {
  available: IBookStatusProps;
  bookData: BookApiResponse;
}

export const BookButtons: FC<IBookButtonsProps> = ({ available, bookData }) => {
  return (
    <Center className={styles.book_buttons}>
      <ModalWindow
        trigger={
          <Button
            onClick={e => {
              e.stopPropagation();
            }}
            className={styles.kowo_book_button}
            visual={available.isAvailable ? 'kowo_red' : 'kowo_white'}
            size={'sm'}
          >
            {available.isAvailable ? 'Забронювати' : 'Стати в чергу'}
          </Button>
        }
        content={<QueueUp book={bookData} type={available.isAvailable ? 'book' : 'queue'} />}
      />
    </Center>
  );
};
