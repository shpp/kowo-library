import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from '@/shared/ui/pagination-lib/pagination';
import { HStack } from '@chakra-ui/react';
import React from 'react';

export const Pagination = () => {
  return (
    <PaginationRoot count={20} pageSize={16} defaultPage={1} variant={'solid'}>
      <HStack>
        <PaginationPrevTrigger color={'rgba(102, 165, 43, 1)'} borderRadius={'8px'} />
        <PaginationItems color="rgba(102, 165, 43, 1)" />
        <PaginationNextTrigger color={'rgba(102, 165, 43, 1)'} borderRadius={'8px'} />
      </HStack>
    </PaginationRoot>
  );
};
