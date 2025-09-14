import React from 'react';
import { Separator, Stack } from '@chakra-ui/react';

import { FilterTags } from './FilterTags';
import { YearsFilter } from './YearsFilter';
import { AuthorFilter } from './AuthorFilter';
import { LanguageFilter } from './LanguageFilter';
import { AvailabilityFilter } from './AvailabilityFilter';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';
import { RecommendationFilter } from './RecommendationFilter';
import { LanguageCode } from '@/utils';
interface BooksFiltersProps {
  books: BooksApiResponse;
  originalBooks?: BooksApiResponse;
  potentialBooksCountsByLanguage: Record<LanguageCode, number>;
}

export const BooksFilters: React.FC<BooksFiltersProps> = ({
  books,
  originalBooks,
  potentialBooksCountsByLanguage,
}) => {
  return (
    <Stack
      width="100%"
      maxW={{ base: 'none', mdOnly: '172px', md: '264px' }}
      minW={{ base: 'none', mdOnly: '172px', md: '264px' }}
      gap="16px"
    >
      <FilterTags />
      <Separator />
      <AvailabilityFilter books={books} />
      {/* <Separator /> */}
      <AuthorFilter books={books} />
      <Separator />
      <LanguageFilter
        books={books}
        potentialBooksCountsByLanguage={potentialBooksCountsByLanguage}
      />
      <Separator />
      <YearsFilter books={books} originalBooks={originalBooks} />
      <Separator />
      <RecommendationFilter books={books} />
    </Stack>
  );
};
