import React, { FC } from 'react';
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from './pagination';
import { ButtonGroup, HStack, Pagination } from '@chakra-ui/react';

interface ICustomPaginationProps {
  pagesCount: number;
  pageSize: number;
  defaultPage: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPage?: any;
  type?: 'default' | 'compact';
}

export const CustomPagination: FC<ICustomPaginationProps> = ({ pageSize, pagesCount, defaultPage, type = 'default' }) => {
  if (type === 'default') {
    return (
      <PaginationRoot count={pagesCount} pageSize={pageSize} defaultPage={defaultPage} variant={'solid'}>
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    );
  } else if (type === 'compact') {
    return (
      <PaginationRoot count={pagesCount} pageSize={pageSize} defaultPage={defaultPage} variant={'solid'}>
        <ButtonGroup gap="4" size="sm" variant="ghost">
          <PaginationPrevTrigger />
          <Pagination.PageText />
          <PaginationNextTrigger />
        </ButtonGroup>
      </PaginationRoot>
    );
  } else {
    return <></>;
  }
};
