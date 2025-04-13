import React from 'react';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { BooksFilters, DrawerBookFilters } from '@/features/books-filters';
import { BooksApiResponse, KowoBook } from '@/entities/kowo-book/ui/kowo-book';
import { CustomPagination } from '@/shared/ui/pagination-lib/customPagination';

// import { BooksSorting } from '@/features/books-sorting/ui/BooksSorting';
import { FiFilter } from 'react-icons/fi';
import { DrawerWrapper } from '@/shared/ui/drawer';

async function fetchBooks() {
  const res = await fetch(`http://localhost:3000/api/books`, {
    cache: 'force-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await res.json();
  return data.data.slice(31, data.data.length);
}

export default async function Books({ searchParams }: { searchParams: { page?: string } }) {
  const books: BooksApiResponse = await fetchBooks();
  const pageSize = 20;
  const currentPage = parseInt(searchParams.page || '1', 10);
  const totalBooks = books.length;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBooks = books.slice(startIndex, endIndex);

  return (
    <Flex maxW="1440px" m="0 auto" p={'3dvh 3dvw'} gap={'16px'} flexDir={'column'}>
      <Box hideFrom={'sm'}>
        <BooksHeader />
      </Box>
      <Flex gap={'16px'}>
        <Box hideBelow={'md'}>
          <BooksFilters />
        </Box>
        <Flex flexDirection={'column'} gap={'16px'} w={'100%'}>
          <Box hideBelow={'sm'}>
            <BooksHeader />
          </Box>
          <SimpleGrid columns={{ base: 2, md: 3, xl: 4 }} gap="16px">
            {paginatedBooks.length > 0 ? paginatedBooks.map((item) => <KowoBook key={item.id} data={item} width={`100%`} />) : <Text>No books to display</Text>}
          </SimpleGrid>
          <Flex justify={'space-between'} alignItems={'center'}>
            <Button bgColor={'white'} fontSize={{ base: '14px', sm: '16px' }} color={'rgba(102, 165, 43, 1)'} border={'1px solid rgba(212, 213, 217, 1)'} borderRadius={'8px'}>
              Завантажити ще
            </Button>
            <Box hideFrom={'lg'}>
              <CustomPagination type="compact" count={totalBooks} pageSize={pageSize} page={currentPage} />
            </Box>
            <Box hideBelow={'lg'}>
              <CustomPagination type="default" count={totalBooks} pageSize={pageSize} page={currentPage} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

const BooksHeader = () => {
  return (
    <Flex gap={{ mdDown: '10px' }} flexDir={'row'} alignItems={{ mdDown: 'start', md: 'center' }} justifyContent={'space-between'} w={'100%'}>
      <Heading textWrap={'nowrap'} fontFamily={'Podkova'} fontWeight={600} fontSize={'32px'} lineHeight={'38.4px'} color={'rgba(3, 7, 18, 1)'}>
        Усі книги
      </Heading>
      <Box width={'40%'} hideFrom={'md'}>
        <DrawerWrapper
          trigger={
            <Button width={'100%'} gap={'8px'} rounded={'8px'} color={'white'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} fontFamily={'Inter'}>
              <FiFilter width={'24px'} height={'24px'} fill="white" stroke="white" />
              Фільтри
            </Button>
          }
          content={<DrawerBookFilters />}
        />
      </Box>
      {/* <Flex alignItems={{ mdDown: 'end', md: 'center' }} gap={'16px'} w={{ mdDown: '100%' }}>
        <Text hideBelow={'md'} mt={'6px'} fontFamily={'Inter'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} color={'rgba(0, 7, 31, 1)'}>
          Сортувати
        </Text>
        <BooksSorting />
      </Flex> */}
    </Flex>
  );
};
