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
  if (available.isAvailable) {
    return (
      <Center className={styles.book_buttons}>
        {available.whenAvailable === 'now' ? (
          <ModalWindow
            trigger={
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={styles.kowo_book_button}
                visual={'kowo_red'}
                size={'sm'}
              >
                Забронювати
              </Button>
            }
            content={<QueueUp book={bookData} type="book" />}
          />
        ) : (
          <ModalWindow
            trigger={
              <Button className={styles.kowo_book_button} visual={'kowo_white'} size={'sm'}>
                Встати в чергу
              </Button>
            }
            content={<QueueUp book={bookData} type='queue' />}
          />
        )}
      </Center>
    );
  } else return <></>;
};
