'use client';
import React from 'react';

import { Flex, Heading, Separator, Text } from '@chakra-ui/react';

export const DescriptionBlock = ({ description }: { description?: string }) => {
  return (
    <Flex flexDir={'column'} gap={'8px'} mb={'24px'}>
      <Heading
        fontFamily={'Inter'}
        fontSize={'20px'}
        lineHeight={'150%'}
        fontWeight={600}
        color={'rgba(3, 7, 18, 1)'}
      >
        Опис книги
      </Heading>
      <Separator />
      <Text>{description}</Text>
    </Flex>
  );
};
