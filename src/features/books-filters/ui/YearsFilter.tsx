'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {Box, Collapsible, HStack, IconButton, Input, Stack, Text} from '@chakra-ui/react';
import { Slider } from '@/shared/ui/slider';
import ChevronUp from '@/shared/assets/icons/chevron-up';
import ChevronDown from '@/shared/assets/icons/chevron-down';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';
import { useRouter, useSearchParams } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: NodeJS.Timeout | null = null;

  const debounced = (...args: Parameters<T>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, wait);
  };

  debounced.cancel = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}

export const YearsFilter = ({ books }: { books?: BooksApiResponse }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(true);

  const { minYear, maxYear } = useMemo(() => {
    if (!books || books.length === 0) {
      return { minYear: 1900, maxYear: new Date().getFullYear() };
    }

    const years = books.map((book) => book.year).filter((year): year is number => typeof year === 'number' && !isNaN(year));

    return {
      minYear: years.length > 0 ? Math.min(...years) : 1900,
      maxYear: years.length > 0 ? Math.max(...years) : new Date().getFullYear(),
    };
  }, [books]);

  const initialMinYear = searchParams.get('years') ? Number(searchParams.get('years')?.split(' - ')[0]) : minYear;
  const initialMaxYear = searchParams.get('years') ? Number(searchParams.get('years')?.split(' - ')[1]) : maxYear;
  const [values, setValues] = useState([initialMinYear, initialMaxYear]);

  const updateQueryParams = (min: number, max: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('years');
    params.delete('search');
    params.delete('page');

    if (min !== minYear || max !== maxYear) {
      params.set('years', `${min} - ${max}`);
    }

    router.push(`?page=1&${params.toString()}`, { scroll: false });
  };

  const debouncedUpdateQueryParamsRef = useRef(
    debounce((min: number, max: number) => {
      updateQueryParams(min, max);
    }, 300)
  );

  const handleValueChange = (newValues: number[]) => {
    setValues(newValues);
    debouncedUpdateQueryParamsRef.current(newValues[0], newValues[1]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newValue = Number(value);
    const newValues = [...values];
    newValues[index] = newValue;

    if (index === 0 && newValue <= values[1] && newValue >= minYear) {
      setValues(newValues);
      updateQueryParams(newValues[0], newValues[1]);
    } else if (index === 1 && newValue >= values[0] && newValue <= maxYear) {
      setValues(newValues);
      updateQueryParams(newValues[0], newValues[1]);
    }
  };

  useEffect(() => {
    const years = searchParams.get('years');
    if (years) {
      const [min, max] = years.split(' - ').map(Number);
      if (!isNaN(min) && !isNaN(max) && min >= minYear && max <= maxYear && min <= max) {
        setValues([min, max]);
      }
    } else {
      setValues([minYear, maxYear]);
    }
  }, [searchParams, minYear, maxYear]);

  useEffect(() => {
    return () => {
      debouncedUpdateQueryParamsRef.current.cancel();
    };
  }, []);

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
            <Input min={minYear} max={maxYear} type="number" value={values[0]} onChange={(e) => handleInputChange(0, e.target.value)} />
            <Input min={minYear} max={maxYear} type="number" value={values[1]} onChange={(e) => handleInputChange(1, e.target.value)} />
          </Stack>

          <Box px="12px">
            <Slider min={minYear} max={maxYear} width="100%" value={values} onValueChange={(details) => handleValueChange(details.value)} />
          </Box>
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
