'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Badge, HStack, Stack, Text } from '@chakra-ui/react';

import { Checkbox } from '@/shared/ui/checkbox';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';
import { useRouter, useSearchParams } from 'next/navigation';

export const AvailabilityFilter = ({ books }: { books?: BooksApiResponse }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [availableCheckboxStatus, setAvailableCheckboxStatus] = useState<boolean>(searchParams.getAll('availability').includes('В наявності'));
  const [onHandsCheckboxStatus, setOnHandsCheckboxStatus] = useState<boolean>(searchParams.getAll('availability').includes('На руках'));

  const { onHands, available } = useMemo(() => {
    if (!books) return { onHands: 0, available: 0 };
    const onHands = books.filter((book) => !book.available).length;
    const available = books.filter((book) => book.available).length;
    return { onHands: onHands, available: available };
  }, [books]);

  const updateQueryParams = (available: boolean, onHands: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('availability');
    params.delete('search');
    params.delete('page');

    if (available) {
      params.append('availability', 'В наявності');
    }
    if (onHands) {
      params.append('availability', 'На руках');
    }

    router.push(`?page=1&${params.toString()}`, { scroll: false });
  };

  const handleAvailableChange = (checked: boolean) => {
    setAvailableCheckboxStatus(checked);
    updateQueryParams(checked, onHandsCheckboxStatus);
  };

  const handleOnHandsChange = (checked: boolean) => {
    setOnHandsCheckboxStatus(checked);
    updateQueryParams(availableCheckboxStatus, checked);
  };

  useEffect(() => {
    if (!searchParams) return;
    setAvailableCheckboxStatus(searchParams.getAll('availability').includes('В наявності'));
    setOnHandsCheckboxStatus(searchParams.getAll('availability').includes('На руках'));
  }, [searchParams]);

  return (
    <Stack>
      <Text fontSize="20px" fontWeight="semibold">
        Наявність
      </Text>
      <HStack justifyContent="space-between" gap="16px">
        <Checkbox checked={availableCheckboxStatus} onCheckedChange={(e) => handleAvailableChange(!!e.checked)}>
          В наявності
        </Checkbox>
        <Badge colorPalette="gray" variant="subtle">
          {available}
        </Badge>
      </HStack>
      <HStack justifyContent="space-between" gap="16px">
        <Checkbox checked={onHandsCheckboxStatus} onCheckedChange={(e) => handleOnHandsChange(!!e.checked)}>
          На руках
        </Checkbox>
        <Badge colorPalette="gray" variant="subtle">
          {onHands}
        </Badge>
      </HStack>
    </Stack>
  );
};
