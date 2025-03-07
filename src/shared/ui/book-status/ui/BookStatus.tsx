import React, { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import GrayBookIcon from '@/shared/assets/icons/gray-book-icon';
import CheckIcon from '@/shared/assets/icons/check-icon';
import RefreshIcon from '@/shared/assets/icons/refresh-icon';

export interface IBookStatusProps {
  isAvailible: boolean;
  whenAvailible: string;
}

export const BookStatus: FC<IBookStatusProps> = ({ isAvailible, whenAvailible }) => {
  return (
    <Flex gap={'4px'} alignItems={'center'}>
      {!isAvailible && (
        <React.Fragment>
          <GrayBookIcon />
          <Text color={'rgba(140, 143, 154, 1)'} fontWeight={400} lineHeight={'18px'} fontSize={'12px'}>
            Зараз на руках
          </Text>
        </React.Fragment>
      )}
      {isAvailible && whenAvailible === 'now' && (
        <React.Fragment>
          <CheckIcon />
          <Text color={'rgba(31, 152, 84, 1)'} fontWeight={400} lineHeight={'18px'} fontSize={'12px'}>
            В наявності
          </Text>
        </React.Fragment>
      )}
      {isAvailible && whenAvailible !== 'now' && (
        <React.Fragment>
          <RefreshIcon />
          <Text color={'rgba(214, 114, 0, 1)'} fontWeight={400} lineHeight={'18px'} fontSize={'12px'}>
            Доступна з {whenAvailible}
          </Text>
        </React.Fragment>
      )}
    </Flex>
  );
};
