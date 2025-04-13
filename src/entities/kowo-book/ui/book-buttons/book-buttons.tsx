import { IBookStatusProps } from '@/shared/ui/book-status';
import { Button, Center } from '@chakra-ui/react';
import React, { FC } from 'react';

import styles from './../kowo-book.module.css';

interface IBookButtonsProps {
  available: IBookStatusProps;
}

export const BookButtons: FC<IBookButtonsProps> = ({ available }) => {
  if (available.isAvailable) {
    return (
      <Center className={styles.book_buttons} >
        {available.whenAvailable === 'now' ? (
          <Button className={styles.kowo_book_button} visual={'kowo_red'} size={'sm'}>
            Забронювати
          </Button>
        ) : (
          <Button className={styles.kowo_book_button} visual={'kowo_white'} size={'sm'}>
            Встати в чергу
          </Button>
        )}
      </Center>
    );
  } else return <></>;
};
