import { IBookStatusProps } from '@/shared/ui/book-status';
import { Button, Center } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IBookButtonsProps {
  available: IBookStatusProps;
  isHover: boolean;
}

export const BookButtons: FC<IBookButtonsProps> = ({ available, isHover }) => {
  if (available.isAvailable) {
    return (
      <Center
        borderBottomRadius={'8px'}
        bgColor={'white'}
        border={'1px solid'}
        borderTop={'none'}
        pt={0}
        mt={'-8px'}
        pos={'absolute'}
        top={'100%'}
        right={'-1px'}
        left={'-1px'}
        _before={{
          content: '""',
          position: 'absolute',
          top: '-6px',
          left: 0,
          h: '6px',
          w: '100%',
          bgColor: 'white',
          zIndex: 1,
        }}
        opacity={isHover ? '1' : '0'}
        maxH={isHover ? '' : '0px'}
        borderColor={isHover ? 'rgba(0, 0, 0, 0.1)' : 'rgba(212, 213, 217, 1)'}
        boxShadow={isHover ? '0px 4px 10px 0px rgba(0, 0, 0, 0.1)' : 'none'}
        p={isHover ? '0px 16px 16px 16px' : '0px'}
        transition={'border-color 0.2s, box-shadow 0.2s, max-height 0.2s'}
      >
        {available.whenAvailable === 'now' ? (
          <Button maxH={isHover ? '33px' : '0px'} transition={'max-height 0.2s'} w={'100%'} bgColor={'red'} borderRadius={'6px'} color={'white'}>
            Забронювати
          </Button>
        ) : (
          <Button
            maxH={isHover ? '33px' : '0px'}
            transition={'max-height 0.2s'}
            w={'100%'}
            bgColor={'white'}
            borderRadius={'6px'}
            color={'kowo.solid'}
            border={'1px solid rgba(212, 213, 217, 1)'}
          >
            Встати в чергу
          </Button>
        )}
      </Center>
    );
  } else return <></>;
};
