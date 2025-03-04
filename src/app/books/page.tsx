'use client';
import React from 'react';
import { Button, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

import { BooksFilters } from '@/features/books-filters';
import { KowoBook } from '@/entities/kowo-book/ui/kowo-book';
import { CustomPagination } from '@/shared/ui/pagination-lib/customPagination';

import { books } from './lib/booksList';
import { BooksSorting } from '@/features/books-sorting/ui/BooksSorting';

export default function Books({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined } }) {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3, xxl: 4 });

  // const page = Number(searchParams.page) || 1;
  // const sort = searchParams.sort || "asc";


  const handleLoadMore = () => {
    //do something
    console.log(searchParams);
  };

  return (
    <Flex maxW="1440px" m="0 auto" p={'3dvh 3dvw'} gap={'16px'}>
      <BooksFilters />

      <Flex flexDirection={'column'} gap={'16px'} w={'100%'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
          <Heading textWrap={'nowrap'} fontFamily={'Podkova'} fontWeight={600} fontSize={'32px'} lineHeight={'38.4px'} color={'rgba(3, 7, 18, 1)'}>
            Усі книги
          </Heading>
          <Flex alignItems={'center'} gap={'16px'}>
            <Text fontFamily={'Inter'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} color={'rgba(0, 7, 31, 1)'}>
              Сортувати
            </Text>
            <BooksSorting />
          </Flex>
        </Flex>

        <Flex wrap="wrap" gap={'16px'}>
          {books.map((item, index) => (
            <KowoBook
              key={index}
              image={item.image}
              name={item.name}
              isLiked={item.isLiked}
              author={item.author}
              availible={item.availible}
              width={`calc((100% - ${16 * (columns! - 1)}px) / ${columns})`}
            />
          ))}
        </Flex>

        <Flex justify={'space-between'} alignItems={'center'}>
          <Button onClick={handleLoadMore} bgColor={'white'} fontSize={'16px'} color={'rgba(102, 165, 43, 1)'} border={'1px solid rgba(212, 213, 217, 1)'} borderRadius={'8px'}>
            Завантажити ще
          </Button>

          <CustomPagination pagesCount={20} pageSize={16} defaultPage={1} />
        </Flex>
      </Flex>
    </Flex>
  );
}
