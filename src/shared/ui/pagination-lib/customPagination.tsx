import React, { FC } from 'react';
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from './pagination';
import { HStack } from '@chakra-ui/react';

interface ICustomPaginationProps {
  pagesCount: number;
  pageSize: number;
  defaultPage: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPage?: any;
}

export const CustomPagination: FC<ICustomPaginationProps> = ({ pageSize, pagesCount, defaultPage }) => {
  return (
    <PaginationRoot count={pagesCount} pageSize={pageSize} defaultPage={defaultPage} variant={'solid'}>
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};
