'use client';
import React from 'react';
import { Button, Flex, Heading, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';

import { BooksFilters, DrawerBookFilters } from '@/features/books-filters';
import { KowoBook } from '@/entities/kowo-book/ui/kowo-book';
import { CustomPagination } from '@/shared/ui/pagination-lib/customPagination';

import { books } from './lib/booksList';
import { BooksSorting } from '@/features/books-sorting/ui/BooksSorting';
import { useScreenSize } from '@/shared/hooks/useScreenSize/useScreenSize';
import { FiFilter } from 'react-icons/fi';
import { DrawerWrapper } from '@/shared/ui/drawer';

export default function Books({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const columns = useBreakpointValue({ base: 2, md: 3, xl: 4 });
  const { isMobile, isTablet } = useScreenSize();

  // const page = Number(searchParams.page) || 1;
  // const sort = searchParams.sort || "asc";

  const handleLoadMore = () => {
    //do something
    console.log(searchParams);
  };

  return (
    <Flex maxW="1440px" m="0 auto" p={'3dvh 3dvw'} gap={'16px'} flexDir={'column'}>
      {isTablet && <BooksHeader />}
      <Flex gap={'16px'}>
        {!isMobile && <BooksFilters />}
        <Flex flexDirection={'column'} gap={'16px'} w={'100%'}>
          {!isTablet && <BooksHeader />}
          <SimpleGrid columns={columns} gap="16px">
            {books.map((item) => (
              <KowoBook key={Math.random()} image={item.image} name={item.name} isLiked={item.isLiked} author={item.author} available={item.available} width={`100%`} />
            ))}
          </SimpleGrid>
          <Flex justify={'space-between'} alignItems={'center'}>
            <Button
              onClick={handleLoadMore}
              bgColor={'white'}
              fontSize={{ base: '14px', sm: '16px' }}
              color={'rgba(102, 165, 43, 1)'}
              border={'1px solid rgba(212, 213, 217, 1)'}
              borderRadius={'8px'}
            >
              Завантажити ще
            </Button>

            <CustomPagination type={isMobile || isTablet ? 'compact' : 'default'} pagesCount={20} pageSize={16} defaultPage={1} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

const BooksHeader = () => {
  const columns = useBreakpointValue({ base: 2, md: 3, xl: 4 });
  const { isMobile } = useScreenSize();

  return (
    <Flex gap={isMobile ? '10px' : '0px'} flexDir={isMobile ? 'column' : 'row'} alignItems={isMobile ? 'start' : 'center'} justifyContent={'space-between'} w={'100%'}>
      <Heading textWrap={'nowrap'} fontFamily={'Podkova'} fontWeight={600} fontSize={'32px'} lineHeight={'38.4px'} color={'rgba(3, 7, 18, 1)'}>
        Усі книги
      </Heading>
      <Flex alignItems={isMobile ? 'end' : 'center'} gap={'16px'} w={{ mdDown: '100%' }}>
        {columns! > 2 && (
          <Text mt={'6px'} fontFamily={'Inter'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} color={'rgba(0, 7, 31, 1)'}>
            Сортувати
          </Text>
        )}
        {columns! === 2 && (
          <DrawerWrapper
            trigger={
              <Button width={'40%'} gap={'8px'} rounded={'8px'} color={'white'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} fontFamily={'Inter'}>
                <FiFilter width={'24px'} height={'24px'} fill="white" stroke="white" />
                Фільтри
              </Button>
            }
            content={<DrawerBookFilters />}
          />
        )}
        <BooksSorting />
      </Flex>
    </Flex>
  );
};
