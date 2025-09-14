'use client';
import React from 'react';
import { Box, Button, HStack, Tag, Text } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

export const FilterTags = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tags = Array.from(
    searchParams.entries().filter(([key]) => !['sort', 'order'].includes(key))
  );

  const handleRemoveTag = (tagToRemove: Array<string>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(tagToRemove[0], tagToRemove[1]);
    params.delete('page');
    const queryString = params.toString();
    router.push(queryString ? `?page=1&${queryString}` : '?page=1', {
      scroll: false,
    });
  };

  const handleClearTags = () => {
    router.push(`?page=1`, { scroll: false });
  };

  return (
    <Box>
      <HStack gap="0">
        <Text fontSize="20px" fontWeight="semibold">
          Фільтри
        </Text>
        {tags.length > 1 && (
          <Button
            variant="plain"
            css={{ color: '#4B8020' }}
            onClick={handleClearTags}
          >
            Очистити
          </Button>
        )}
      </HStack>
      <HStack flexWrap="wrap" mt={2}>
        {tags
          .filter(([key]) => key !== 'page')
          .map((tag, index) => (
            <Tag.Root key={index} variant="outline" padding="6px">
              <Tag.Label>{tag[1]}</Tag.Label>
              <Tag.EndElement>
                <Tag.CloseTrigger
                  onClick={() => handleRemoveTag(tag)}
                  aria-label={`Видалити тег ${tag}`}
                />
              </Tag.EndElement>
            </Tag.Root>
          ))}
      </HStack>
    </Box>
  );
};
