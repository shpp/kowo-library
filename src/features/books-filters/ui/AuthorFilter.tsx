'use client';
import React, { useMemo, useState } from 'react';
import { Badge, Collapsible, Group, HStack, IconButton, Input, InputElement, Stack, Text } from '@chakra-ui/react';

import { Checkbox } from '@/shared/ui/checkbox';
import ChevronUp from '@/shared/assets/icons/chevron-up';
import SearchIcon from '@/shared/assets/icons/search-icon';
import ChevronDown from '@/shared/assets/icons/chevron-down';
import { BookApiResponse, BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';

export const AuthorFilter = ({ books }: { books: BooksApiResponse | undefined }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const authors = useMemo(() => {
    if (!books) {
      return [];
    }

    const authorMap = books.reduce((acc: { [key: string]: { count: number; flag?: string } }, book: BookApiResponse) => {
      const authorsNames = book.authors;
      authorsNames.forEach((authorName) => {
        if (!acc[authorName]) {
          acc[authorName] = { count: 0 };
        }
        acc[authorName].count += 1;
      });
      return acc;
    }, {});

    return Object.entries(authorMap).map(([name, value]) => ({
      name,
      count: (value as { count: number; flag?: string }).count,
      flag: (value as { count: number; flag?: string }).flag,
    }));
  }, [books]);

  const toggleAuthor = (author: string) => {
    setSelectedAuthors((prev) => (prev.includes(author) ? prev.filter((a) => a !== author) : [...prev, author]));
  };

  const filteredAuthors = authors.filter((author) => author.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Collapsible.Root open={isOpen} onOpenChange={({ open }) => setIsOpen(open)}>
      <Collapsible.Trigger asChild>
        <HStack justify="space-between" css={{ cursor: 'pointer' }}>
          <Text fontSize="20px" fontWeight="semibold">
            Автор
          </Text>
          <IconButton size="xs" variant="plain">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </HStack>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Stack gap="12px" pt="8px">
          <Group width="100%">
            <Input value={search} pe={`calc(var(--input-height) - 6px)`} placeholder="Пошук" onChange={(e) => setSearch(e.target.value)} />
            <InputElement pointerEvents="none" placement="end">
              <SearchIcon />
            </InputElement>
          </Group>

          <Stack gap="10px" maxHeight="190px" overflowY="auto">
            {filteredAuthors.map((author) => (
              <HStack key={author.name} justifyContent="space-between" gap="16px">
                <Checkbox checked={selectedAuthors.includes(author.name)} onChange={() => toggleAuthor(author.name)}>
                  {author.name} {author.flag && author.flag}
                </Checkbox>
                <Badge colorPalette="gray" variant="subtle">
                  {author.count}
                </Badge>
              </HStack>
            ))}
          </Stack>
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
