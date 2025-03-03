'use client';
import React from 'react';
import { Button, createListCollection, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

import { BooksFilters } from '@/features/books-filters';
import { KowoBook } from '@/entities/kowo-book/ui/kowo-book';
import { Pagination } from './ui/pagination';
import { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from '@/shared/ui/select-lib/select';

const imageUrl = `data:image/jpeg;base64,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`;

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
});

const books = [
  {
    image: imageUrl,
    name: 'Я бачу, вас цікавить пітьма',
    isLiked: false,
    author: 'Ілларіон Бобрік',
    availible: { isAvailible: true, whenAvailible: 'now' },
  },
  {
    image: imageUrl,
    name: 'Я бачу, вас цікавить бобри',
    isLiked: false,
    author: 'Ілларіон Павлюк',
    availible: { isAvailible: true, whenAvailible: 'now' },
  },
  {
    image: imageUrl,
    name: 'Я бачу, вас цікавить пітьма',
    isLiked: false,
    author: 'Ілларіон Павлюк',
    availible: { isAvailible: true, whenAvailible: 'now' },
  },
  {
    image: imageUrl,
    name: 'Я бачу, вас цікавить пітьма',
    isLiked: true,
    author: 'Ілларіон Павлюк',
    availible: { isAvailible: true, whenAvailible: 'now' },
  },
  {
    image: imageUrl,
    name: 'Я бачу, вас цікавить пітьма',
    isLiked: false,
    author: 'Ілларіон Павлюк',
    availible: { isAvailible: true, whenAvailible: 'now' },
  },
  {
    image: imageUrl,
    name: 'Я бачу, вас цікавить пітьма',
    isLiked: true,
    author: 'Ілларіон Павлюк',
    availible: { isAvailible: false, whenAvailible: '21.12.2021' },
  },
];

export default function Books() {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3, xxl: 4 });
  return (
    <Flex maxW="1440px" margin="3dvh 3dvw" gap={'16px'}>
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
            {/* Need re-creating with using portal */}
            <SelectRoot collection={frameworks} width={'230px'}>
              <SelectLabel />
              <SelectTrigger>
                <SelectValueText />
              </SelectTrigger>
              <SelectContent>
                {frameworks.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
            {/* ------------------------------------ */}
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
          <Button bgColor={'white'} fontSize={'16px'} color={'rgba(102, 165, 43, 1)'} border={'1px solid rgba(212, 213, 217, 1)'} borderRadius={'8px'}>
            Завантажити ще
          </Button>

          <Pagination />
        </Flex>
      </Flex>
    </Flex>
  );
}
