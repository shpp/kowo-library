import { KowoBook } from '@/entities/kowo-book/ui/kowo-book';
import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import React, { FC } from 'react';

import kosmonawt from '@/shared/assets/illustrations/kosmonawt.jpg';

interface IBookRecommendationsProps {
  type: 'history' | 'recommendations';
}


export const BookRecommendations: FC<IBookRecommendationsProps> = ({ type }) => {
  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4, xl: 5 });

  return (
    <Flex flexDir={'column'} gap={'24px'}>
      <Heading fontSize={'40px'} fontWeight={600}>{type === 'history' ? 'Ви переглядали' : 'Що варто прочитати?'}</Heading>
      <Flex gap={'16px'}>
      {Array.from({ length: columns! }).map((_, index) => (
          <KowoBook
            key={index}
            image={kosmonawt}
            author={'Матіаш Дзвінка'}
            name={'Білий попіл'}
            isLiked={false}
            available={{ isAvailable: true, whenAvailable: 'now' }}
            width={`calc((100% - ${16 * (columns! - 1)}px) / ${columns})`}
          />
        ))}
      </Flex>
    </Flex>
  );
};
