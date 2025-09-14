'use client';
import { fetchBooks } from '@/actions';
import { KowoBook } from '@/entities/kowo-book/ui/kowo-book';
import {
  Flex,
  Heading,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React, { FC, useMemo } from 'react';

interface IBookRecommendationsProps {
  type: 'history' | 'recommendations';
  currentBookCreatedTime: number;
}

export const BookRecommendations: FC<IBookRecommendationsProps> = ({
  type,
  currentBookCreatedTime,
}) => {
  const { data: allBooks = [] } = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });
  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4, xl: 5 });

  const recommendations = useMemo(() => {
    return allBooks
      .filter(
        book => book.isRecommended || book.createdTime > currentBookCreatedTime
      )
      .toSorted(() => Math.random() - 0.5)
      .slice(0, columns);
  }, [allBooks, columns, currentBookCreatedTime]);

  return (
    <Flex flexDir={'column'} gap={'24px'}>
      <Heading fontSize={'40px'} fontWeight={600}>
        {type === 'history' ? 'Ви переглядали' : 'Що варто прочитати?'}
      </Heading>
      <SimpleGrid columns={columns} gap={'16px'}>
        {recommendations.map(item => (
          <KowoBook data={item} key={item.id} width={'100%'} type={'compact'} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
