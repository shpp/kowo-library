'use client';
import { KowoBook } from '@/entities/kowo-book/ui/kowo-book';
import { booksRecommendationsMockData } from '@/shared/lib/books-recommendations-mock-data';
import {
  Flex,
  Heading,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { FC } from 'react';

interface IBookRecommendationsProps {
  type: 'history' | 'recommendations';
}

export const BookRecommendations: FC<IBookRecommendationsProps> = ({
  type,
}) => {
  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4, xl: 5 });

  return (
    <Flex flexDir={'column'} gap={'24px'}>
      <Heading fontSize={'40px'} fontWeight={600}>
        {type === 'history' ? 'Ви переглядали' : 'Що варто прочитати?'}
      </Heading>
      <SimpleGrid columns={columns} gap={'16px'}>
        {booksRecommendationsMockData.slice(0, columns).map(item => (
          <KowoBook data={item} key={item.id} width={'100%'} type={'compact'} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
