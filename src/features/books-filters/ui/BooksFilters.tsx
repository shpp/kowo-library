import React from 'react';
import { Separator, Stack } from '@chakra-ui/react';

import { FilterTags } from './FilterTags';
import { YearsFilter } from './YearsFilter';
import { AuthorFilter } from './AuthorFilter';
import { LanguageFilter } from './LanguageFilter';
import { AvailabilityFilter } from './AvailabilityFilter';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';

interface BooksFiltersProps {
  books: BooksApiResponse;
}

export const BooksFilters: React.FC<BooksFiltersProps> = ({ books }) => {
  return (
    <Stack width="100%" maxW={{ base: 'none', mdOnly: '172px', md: '264px' }} minW={{ base: 'none', mdOnly: '172px', md: '264px' }} gap="16px">
      <FilterTags />
      <Separator />
       <AvailabilityFilter books={books} />
      {/* <Separator /> */}
      <AuthorFilter books={books} />
      <Separator />
      <LanguageFilter books={books} />
      <Separator />
      <YearsFilter books={books} />
    </Stack>
  );
};
