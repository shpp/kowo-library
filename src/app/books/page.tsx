import React from 'react';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { BooksFilters, DrawerBookFilters } from '@/features/books-filters';
import { BooksApiResponse, KowoBook } from '@/entities/kowo-book/ui/kowo-book';
import { CustomPagination } from '@/shared/ui/pagination-lib/customPagination';

// import { BooksSorting } from '@/features/books-sorting/ui/BooksSorting';
import { FiFilter } from 'react-icons/fi';
import { DrawerWrapper } from '@/shared/ui/drawer';

async function fetchBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/books`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await res.json();
  return data.data;
}

type SearchParamsType = {
  page?: string;
  years?: string;
  search?: string;
  authors?: string | string[];
  availability?: string | string[];
  languages?: string | string[];
};

export default async function Books({ searchParams }: { searchParams: SearchParamsType }) {
  const { page, years, authors, availability, languages, search } = await searchParams; // used because of https://nextjs.org/docs/messages/sync-dynamic-apis
  const allBooks: BooksApiResponse = await fetchBooks();

  const authorsArray = Array.isArray(authors) ? authors : authors ? [authors] : [];
  const availabilityArray = Array.isArray(availability) ? availability : availability ? [availability] : [];
  const languagesArray = Array.isArray(languages) ? languages : languages ? [languages] : [];

  let filteredBooks: BooksApiResponse = allBooks;

  if (search && search.trim()) {
    const searchLower = search.toLowerCase();
    filteredBooks = filteredBooks.filter((item) => {
      if (item.name.toLowerCase().includes(searchLower)) return true;
      return item.authors.some((author) => author.toLowerCase().includes(searchLower));
    });
  }

  if (years) {
    const [min, max] = years.split(' - ').map(Number);
    if (!isNaN(min) && !isNaN(max) && min <= max) {
      filteredBooks = filteredBooks.filter((book) => book.year >= min && book.year <= max);
    }
  }

  if (authorsArray.length > 0) {
    filteredBooks = filteredBooks.filter((book) => book.authors.some((author) => authorsArray.includes(author)));
  }

  if (availabilityArray.length > 0) {
    filteredBooks = filteredBooks.filter((book) => {
      if (availabilityArray.includes('В наявності') && book.available) {
        return true;
      }
      if (availabilityArray.includes('На руках') && !book.available) {
        return true;
      }
      return false;
    });
  }

  if (languagesArray.length > 0) {
    filteredBooks = filteredBooks.filter((book) => {
      const bookLanguage = book.language === 'ua' ? 'Українська' : book.language === 'ru' ? 'Москворота' : 'Англійська';
      return languagesArray.includes(bookLanguage);
    });
  }

  const pageSize = 20;
  const currentPage = Math.max(1, Number(page) || 1);
  const totalBooks = filteredBooks.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  return (
    <Flex maxW="1440px" m="0 auto" p={'3dvh 3dvw'} gap={'16px'} flexDir={'column'}>
      <Box hideFrom={'sm'}>
        <BooksHeader books={filteredBooks} />
      </Box>
      <Flex gap={'16px'}>
        <Box hideBelow={'md'}>
          <BooksFilters books={filteredBooks} />
        </Box>
        <Flex flexDirection={'column'} gap={'16px'} w={'100%'}>
          <Box hideBelow={'sm'}>
            <BooksHeader books={filteredBooks} />
          </Box>
          <SimpleGrid columns={{ base: 2, md: 3, xl: 4 }} gap="16px">
            {paginatedBooks.length > 0 ? paginatedBooks.map((item) => <KowoBook key={item.id} data={item} width={`100%`} type='full' />) : <Text>No books to display</Text>}
          </SimpleGrid>
          <Flex justify={'end'} alignItems={'center'}>
            {/* <Button bgColor={'white'} fontSize={{ base: '14px', sm: '16px' }} color={'rgba(102, 165, 43, 1)'} border={'1px solid rgba(212, 213, 217, 1)'} borderRadius={'8px'}>
              Завантажити ще
            </Button> */}
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

const BooksHeader = ({ books }: { books: BooksApiResponse }) => {
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
          content={<DrawerBookFilters books={books} />}
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
