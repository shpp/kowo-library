import React, { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import GrayBookIcon from '@/shared/assets/icons/gray-book-icon';
import CheckIcon from '@/shared/assets/icons/check-icon';
import RefreshIcon from '@/shared/assets/icons/refresh-icon';

export interface IBookStatusProps {
  isAvailable: boolean;
  whenAvailable: string;
}

export const BookStatus: FC<IBookStatusProps> = ({ isAvailable, whenAvailable }) => {
  return (
    <Flex gap={'4px'} alignItems={'center'}>
      {!isAvailable && (
        <React.Fragment>
          <GrayBookIcon />
          <Text color={'rgba(140, 143, 154, 1)'} fontWeight={400} lineHeight={'18px'} fontSize={'12px'}>
            Зараз на руках
          </Text>
        </React.Fragment>
      )}
      {isAvailable && whenAvailable === 'now' && (
        <React.Fragment>
          <CheckIcon />
          <Text color={'rgba(31, 152, 84, 1)'} fontWeight={400} lineHeight={'18px'} fontSize={'12px'}>
            В наявності
          </Text>
        </React.Fragment>
      )}
      {isAvailable && whenAvailable !== 'now' && (
        <React.Fragment>
          <RefreshIcon />
          <Text color={'rgba(214, 114, 0, 1)'} fontWeight={400} lineHeight={'18px'} fontSize={'12px'}>
            Доступна з {whenAvailable}
          </Text>
        </React.Fragment>
      )}
    </Flex>
  );
};
