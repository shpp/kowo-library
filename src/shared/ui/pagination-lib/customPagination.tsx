'use client';
import React, { FC } from 'react';
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from './pagination';
import { ButtonGroup, HStack, Pagination } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ICustomPaginationProps {
  count: number;
  pageSize: number;
  page: number;
  type?: 'default' | 'compact';
}

export const CustomPagination: FC<ICustomPaginationProps> = ({ pageSize, count, page, type = 'default' }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updatePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`/books?${params.toString()}`);
  };

  if (count < 2) {
    return null;
  }

  if (type === 'default') {
    return (
      <PaginationRoot onPageChange={(e) => updatePage(e.page)} page={page} count={count} pageSize={pageSize}>
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    );
  } else if (type === 'compact') {
    return (
      <PaginationRoot onPageChange={(e) => updatePage(e.page)} page={page} count={count} pageSize={pageSize}>
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
