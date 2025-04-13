'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Collapsible, HStack, IconButton, Input, Stack, Text } from '@chakra-ui/react';

import { Slider } from '@/shared/ui/slider';
import ChevronUp from '@/shared/assets/icons/chevron-up';
import ChevronDown from '@/shared/assets/icons/chevron-down';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';

export const YearsFilter = ({ books }: { books: BooksApiResponse | undefined }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { minYear, maxYear } = useMemo(() => {
    if (!books || books.length === 0) {
      return { minYear: 1900, maxYear: new Date().getFullYear() };
    }

    const years = books.map((book) => book.year).filter((year): year is number => typeof year === 'number' && !isNaN(year));

    return {
      minYear: years.length > 0 ? Math.min(...years) : 1970,
      maxYear: years.length > 0 ? Math.max(...years) : new Date().getFullYear(),
    };
  }, [books]);

  const [values, setValues] = useState([minYear, maxYear]);

  useEffect(() => {
    setValues([minYear, maxYear]);
  }, [minYear, maxYear]);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={({ open }) => setIsOpen(open)}>
      <Collapsible.Trigger asChild>
        <HStack justify="space-between" css={{ cursor: 'pointer' }}>
          <Text fontSize="20px" fontWeight="semibold">
            Роки видання
          </Text>
          <IconButton size="xs" variant="plain">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </HStack>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Stack pos={'relative'} zIndex={999} gap="12px" pt="8px" width="100%">
          <Stack direction="row">
            <Input min={minYear} max={maxYear} type='number' value={values[0]} onChange={(e) => setValues([Number(e.target.value), values[1]])} />
            <Input min={minYear} max={maxYear} type='number' value={values[1]} onChange={(e) => setValues([values[0], Number(e.target.value)])} />
          </Stack>

          <Slider min={minYear} max={maxYear} width="100%" value={values} onValueChange={({ value }) => setValues(value)} />
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
