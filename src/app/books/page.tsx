import React from 'react';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { BooksFilters, DrawerBookFilters } from '@/features/books-filters';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';
import { CustomPagination } from '@/shared/ui/pagination-lib/customPagination';

// import { BooksSorting } from '@/features/books-sorting/ui/BooksSorting';
import { FiFilter } from 'react-icons/fi';
import { DrawerWrapper } from '@/shared/ui/drawer';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { fetchBooks } from '@/actions';
import {
  decodeQueryParam,
  KOWO_RECOMMENDED_LABEL,
  LanguageCode,
  languageCodeToNameMap,
  LanguageName,
} from '@/utils';

const KowoBook = dynamic(() => import('@/entities/kowo-book/ui/kowo-book'));

type SortType = 'createdTime' | 'name' | 'year';

type SearchParamsType = {
  page?: string;
  years?: string;
  search?: string;
  sub_category?: string;
  authors?: string | string[];
  availability?: string | string[];
  languages?: string | string[];
  recommendation?: string;
  sort?: SortType;
  order?: 'asc' | 'desc';
};

type PageProps = {
  searchParams: Record<string, string | string[] | undefined> &
    Promise<unknown>;
};

const Books: NextPage<PageProps> = async ({ searchParams }: PageProps) => {
  const {
    page,
    years,
    authors,
    availability,
    languages,
    recommendation,
    search,
    sub_category,
    sort,
    order,
  } = (await searchParams) as SearchParamsType; // used because of https://nextjs.org/docs/messages/sync-dynamic-apis
  const allBooks: BooksApiResponse = await fetchBooks();

  const authorsArray = (
    Array.isArray(authors) ? authors : authors ? [authors] : []
  ).map(author => decodeQueryParam(author));
  const availabilityArray = (
    Array.isArray(availability)
      ? availability
      : availability
        ? [availability]
        : []
  ).map(availability => decodeQueryParam(availability));
  const languagesArray: LanguageName[] = (
    Array.isArray(languages)
      ? languages
      : languages
        ? [languages]
        : [languageCodeToNameMap['ua'], languageCodeToNameMap['en']]
  ).map(language => decodeQueryParam(language) as LanguageName);

  let filteredBooks: BooksApiResponse = allBooks;
  const potentialBooksCountsByLanguage: Record<LanguageCode, number> = {
    ua: 0,
    en: 0,
    ru: 0,
  };

  if (search && search.trim()) {
    const searchLower = decodeQueryParam(search).toLowerCase();
    filteredBooks = filteredBooks.filter(item => {
      if (item.name.toLowerCase().includes(searchLower)) return true;
      return item.authors.some(author =>
        author.toLowerCase().includes(searchLower)
      );
    });
  }

  if (sub_category) {
    const sub_category_decoded = decodeQueryParam(sub_category);
    filteredBooks = filteredBooks.filter(book => {
      return book.categories.includes(`.${sub_category_decoded}`);
    });
  }

  if (years) {
    const [min, max] = years.split('-').map(Number);
    if (!isNaN(min) && !isNaN(max) && min <= max) {
      filteredBooks = filteredBooks.filter(
        book => book.year >= min && book.year <= max
      );
    }
  }

  const recommendationDecoded = decodeQueryParam(recommendation);
  if (recommendation && recommendationDecoded === KOWO_RECOMMENDED_LABEL) {
    filteredBooks = filteredBooks.filter(book => book.isRecommended);
  }

  if (authorsArray.length > 0) {
    filteredBooks = filteredBooks.filter(book =>
      book.authors.some(author => authorsArray.includes(author))
    );
  }

  if (availabilityArray.length > 0) {
    filteredBooks = filteredBooks.filter(book => {
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
    filteredBooks = filteredBooks.filter(book => {
      const result = languagesArray.includes(
        languageCodeToNameMap[book.language]
      );
      if (!result) {
        potentialBooksCountsByLanguage[book.language]++;
      }
      return result;
    });
  }

  if (sort) {
    filteredBooks = filteredBooks.toSorted((a, b) => {
      const sortKey = sort ?? 'createdTime';
      const sortDirection = (order ?? 'asc') === 'asc' ? 1 : -1;
      const leftSortValue = a[sortKey];
      const rightSortValue = b[sortKey];
      if (
        typeof leftSortValue === 'string' &&
        typeof rightSortValue === 'string'
      ) {
        return leftSortValue.localeCompare(rightSortValue) * sortDirection;
      }
      if (
        typeof leftSortValue === 'number' &&
        typeof rightSortValue === 'number'
      ) {
        return (leftSortValue - rightSortValue) * sortDirection;
      }
      if (
        typeof leftSortValue === 'boolean' &&
        typeof rightSortValue === 'boolean'
      ) {
        return (leftSortValue ? 1 : -1) * sortDirection;
      }
      return 0;
    });
  }

  const pageSize = 20;
  const currentPage = Math.max(1, Number(page) || 1);
  const totalBooks = filteredBooks.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  return (
    <Flex
      maxW="1440px"
      m="0 auto"
      p={'3dvh 3dvw'}
      gap={'16px'}
      flexDir={'column'}
    >
      <Box hideFrom={'sm'}>
        <BooksHeader
          books={filteredBooks}
          potentialBooksCountsByLanguage={potentialBooksCountsByLanguage}
        />
      </Box>
      <Flex gap={'16px'}>
        <Box hideBelow={'md'}>
          <BooksFilters
            books={filteredBooks}
            potentialBooksCountsByLanguage={potentialBooksCountsByLanguage}
            originalBooks={allBooks}
          />
        </Box>
        <Flex flexDirection={'column'} gap={'16px'} w={'100%'}>
          <Box hideBelow={'sm'}>
            <BooksHeader
              books={filteredBooks}
              potentialBooksCountsByLanguage={potentialBooksCountsByLanguage}
            />
          </Box>
          <SimpleGrid columns={{ base: 2, md: 3, xl: 4 }} gap="16px">
            {paginatedBooks.length > 0 ? (
              paginatedBooks.map(item => (
                <KowoBook
                  key={item.id}
                  data={item}
                  width={`100%`}
                  type="full"
                />
              ))
            ) : (
              <Text>Не знайдено книг для відображення</Text>
            )}
          </SimpleGrid>
          <Flex justify={'end'} alignItems={'center'}>
            {/* <Button bgColor={'white'} fontSize={{ base: '14px', sm: '16px' }} color={'rgba(102, 165, 43, 1)'} border={'1px solid rgba(212, 213, 217, 1)'} borderRadius={'8px'}>
              Завантажити ще
            </Button> */}
            <Box hideFrom={'lg'}>
              <CustomPagination
                type="compact"
                count={totalBooks}
                pageSize={pageSize}
                page={currentPage}
              />
            </Box>
            <Box hideBelow={'lg'}>
              <CustomPagination
                type="default"
                count={totalBooks}
                pageSize={pageSize}
                page={currentPage}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const BooksHeader = ({
  books,
  potentialBooksCountsByLanguage,
}: {
  books: BooksApiResponse;
  potentialBooksCountsByLanguage: Record<LanguageCode, number>;
}) => {
  return (
    <Flex
      gap={{ mdDown: '10px' }}
      flexDir={'row'}
      alignItems={{ mdDown: 'start', md: 'center' }}
      justifyContent={'space-between'}
      w={'100%'}
    >
      <Heading
        textWrap={'nowrap'}
        fontFamily={'Podkova'}
        fontWeight={600}
        fontSize={'32px'}
        lineHeight={'38.4px'}
        color={'rgba(3, 7, 18, 1)'}
      >
        Усі книги
      </Heading>
      <Box width={'40%'} hideFrom={'md'}>
        <DrawerWrapper
          trigger={
            <Button
              width={'100%'}
              gap={'8px'}
              rounded={'8px'}
              color={'white'}
              fontWeight={600}
              fontSize={'16px'}
              lineHeight={'150%'}
              fontFamily={'Inter'}
            >
              <FiFilter
                width={'24px'}
                height={'24px'}
                fill="white"
                stroke="white"
              />
              Фільтри
            </Button>
          }
          content={
            <DrawerBookFilters
              books={books}
              originalBooks={books}
              potentialBooksCountsByLanguage={potentialBooksCountsByLanguage}
            />
          }
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

export default Books;
