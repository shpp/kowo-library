'use client';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Badge,
  Collapsible,
  Group,
  HStack,
  IconButton,
  Input,
  InputElement,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Checkbox } from '@/shared/ui/checkbox';
import ChevronUp from '@/shared/assets/icons/chevron-up';
import SearchIcon from '@/shared/assets/icons/search-icon';
import ChevronDown from '@/shared/assets/icons/chevron-down';
import {
  BookApiResponse,
  BooksApiResponse,
} from '@/entities/kowo-book/ui/kowo-book';
import { useRouter, useSearchParams } from 'next/navigation';

export const AuthorFilter = ({
  books,
}: {
  books: BooksApiResponse | undefined;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState('');

  const [selectedAuthors, setSelectedAuthors] = useState<string[]>(
    searchParams.getAll('authors')
  );

  const authors = useMemo(() => {
    if (!books) {
      return [];
    }

    type AuthorMap = Record<string, { count: number; flag?: string }>;
    const authorMap: AuthorMap = books.reduce(
      (acc: AuthorMap, book: BookApiResponse) => {
        const authorsNames = book.authors;
        authorsNames.forEach(authorName => {
          if (!acc[authorName]) {
            acc[authorName] = { count: 0 };
          }
          acc[authorName].count += 1;
        });
        return acc;
      },
      {}
    );

    return Object.entries(authorMap)
      .toSorted((a, b) => b[1].count - a[1].count)
      .map(([name, value]) => ({
        name,
        count: (value as { count: number; flag?: string }).count,
        flag: (value as { count: number; flag?: string }).flag,
      }));
  }, [books]);

  const updateQueryParams = (authors: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('authors');
    params.delete('search');
    params.delete('page');

    if (authors.length == 0) {
      router.push(`?${params.toString()}`, { scroll: false });
      return;
    }

    authors.forEach(author => {
      params.append('authors', author);
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleAuthorChange = (author: string, checked: boolean) => {
    const updatedAuthors = checked
      ? [...selectedAuthors, author]
      : selectedAuthors.filter(a => a !== author);

    setSelectedAuthors(updatedAuthors);
    updateQueryParams(updatedAuthors);
  };

  useEffect(() => {
    if (!searchParams) return;
    setSelectedAuthors(searchParams.getAll('authors'));
  }, [searchParams]);

  const filteredAuthors = authors.filter(author =>
    author.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={({ open }) => setIsOpen(open)}
    >
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
            <Input
              value={search}
              pe={`calc(var(--input-height) - 6px)`}
              placeholder="Пошук"
              onChange={e => setSearch(e.target.value)}
            />
            <InputElement pointerEvents="none" placement="end">
              <SearchIcon />
            </InputElement>
          </Group>

          <Stack gap="10px" maxHeight="190px" overflowY="auto">
            {filteredAuthors.map(author => (
              <HStack
                key={author.name}
                justifyContent="space-between"
                gap="16px"
              >
                <Checkbox
                  checked={selectedAuthors.includes(author.name)}
                  onCheckedChange={e =>
                    handleAuthorChange(author.name, !!e.checked)
                  }
                >
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
