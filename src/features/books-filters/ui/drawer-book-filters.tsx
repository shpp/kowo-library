import React from 'react';
import { Heading, HStack } from '@chakra-ui/react';

import {
  DrawerBody,
  DrawerHeader,
  StaticCloseTrigger,
} from '@/shared/ui/drawer/ui/drawer-lib';
import { BooksFilters } from './BooksFilters';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';

import ArrowLeftIcon from '@/shared/assets/icons/arrow-left-icon';
import FilterIcon from '@/shared/assets/icons/filter-icon';
import { LanguageCode } from '@/utils';

export const DrawerBookFilters = ({
  books,
  originalBooks,
  potentialBooksCountsByLanguage,
}: {
  books: BooksApiResponse;
  originalBooks?: BooksApiResponse;
  potentialBooksCountsByLanguage: Record<LanguageCode, number>;
}) => {
  return (
    <>
      <DrawerHeader>
        <HStack justifyContent={'space-between'} w={'100%'}>
          <HStack gap={'12px'}>
            <ArrowLeftIcon />
            <FilterIcon />
            <Heading
              fontFamily={'Inter'}
              fontSize={'20px'}
              lineHeight={'150%'}
              fontWeight={600}
            >
              Фільтри
            </Heading>
          </HStack>
          <StaticCloseTrigger />
        </HStack>
      </DrawerHeader>
      <DrawerBody>
        <BooksFilters
          books={books}
          originalBooks={originalBooks}
          potentialBooksCountsByLanguage={potentialBooksCountsByLanguage}
        />
      </DrawerBody>
    </>
  );
};
