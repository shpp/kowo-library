import React from 'react';
import { Separator, Stack } from '@chakra-ui/react';

import { FilterTags } from './FilterTags';
import { YearsFilter } from './YearsFilter';
import { AuthorFilter } from './AuthorFilter';
import { LanguageFilter } from './LanguageFilter';
import { AvailabilityFilter } from './AvailabilityFilter';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';

async function fetchBooks() {
  const res = await fetch(`http://localhost:3000/api/books`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await res.json();
  return data.data.slice(31, data.data.length);
}

export const BooksFilters = async () => {
  const books: BooksApiResponse = await fetchBooks();
  return (
    <Stack width="100%" maxW={{ base: 'none', mdOnly: '172px', md: '264px' }} minW={{ base: 'none', mdOnly: '172px', md: '264px' }} gap="16px">
      <FilterTags />
      <Separator />
      <AvailabilityFilter books={books} />
      <Separator />
      <AuthorFilter books={books} />
      <Separator />
      <LanguageFilter books={books} />
      <Separator />
      <YearsFilter books={books} />
    </Stack>
  );
};
