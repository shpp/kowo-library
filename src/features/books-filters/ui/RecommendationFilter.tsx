'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Badge, HStack, Stack, Text } from '@chakra-ui/react';

import { Checkbox } from '@/shared/ui/checkbox';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';
import { useRouter, useSearchParams } from 'next/navigation';
import { KOWO_RECOMMENDED_LABEL } from '@/utils';

export const RecommendationFilter = ({
  books,
}: {
  books?: BooksApiResponse;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [recommendedCheckboxStatus, setRecommendedCheckboxStatus] =
    useState<boolean>(
      searchParams.getAll('recommendation').includes(KOWO_RECOMMENDED_LABEL)
    );

  const recommendedAmount = useMemo(() => {
    if (!books) return 0;
    const recommended = books.filter(book => book.isRecommended).length;
    return recommended;
  }, [books]);

  const updateQueryParams = (available: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('availability');
    params.delete('search');
    params.delete('page');

    if (available) {
      params.append('recommendation', KOWO_RECOMMENDED_LABEL);
    }

    router.push(`?page=1&${params.toString()}`, { scroll: false });
  };

  const handleRecommendedChange = (checked: boolean) => {
    setRecommendedCheckboxStatus(checked);
    updateQueryParams(checked);
  };

  useEffect(() => {
    if (!searchParams) return;
    setRecommendedCheckboxStatus(
      searchParams.getAll('recommendation').includes(KOWO_RECOMMENDED_LABEL)
    );
  }, [searchParams]);

  return (
    <Stack>
      <Text fontSize="20px" fontWeight="semibold">
        Рекомендація
      </Text>
      <HStack justifyContent="space-between" gap="16px">
        <Checkbox
          checked={recommendedCheckboxStatus}
          onCheckedChange={e => handleRecommendedChange(!!e.checked)}
        >
          KOWO рекомендує
        </Checkbox>
        <Badge colorPalette="gray" variant="subtle">
          {recommendedAmount}
        </Badge>
      </HStack>
    </Stack>
  );
};
