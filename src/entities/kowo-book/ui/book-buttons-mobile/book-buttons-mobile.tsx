import { IBookStatusProps } from '@/shared/ui/book-status';
import { Button, Box } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IBookButtonsProps {
  available: IBookStatusProps;
}

export const BookButtonsMobile: FC<IBookButtonsProps> = ({ available }) => {
  if (available.isAvailable) {
    return (
      <React.Fragment>
        {available.whenAvailable === 'now' ? (
          <Button visual={'kowo_red'} size={'sm'} width={'100%'}>
            Забронювати
          </Button>
        ) : (
          <Button visual={'kowo_white'} size={'sm'} width={'100%'}>
            Встати в чергу
          </Button>
        )}
      </React.Fragment>
    );
  } else return <Box width={'100%'} height={'33px'} />;
};
