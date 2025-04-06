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
          <Button maxH={'33px'} w={'100%'} bgColor={'red'} borderRadius={'6px'} color={'white'}>
            Забронювати
          </Button>
        ) : (
          <Button maxH={'33px'} w={'100%'} bgColor={'white'} borderRadius={'6px'} color={'kowo.solid'} border={'1px solid rgba(212, 213, 217, 1)'}>
            Встати в чергу
          </Button>
        )}
      </React.Fragment>
    );
  } else return <Box width={'100%'} height={'33px'} />;
};
