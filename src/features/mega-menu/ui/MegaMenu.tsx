import React from 'react';
import Link from 'next/link';
import { Box, Button, Collapsible, Separator, Stack, Text, Link as ChakraLink } from '@chakra-ui/react';

import CatalogIcon from '@/shared/assets/icons/catalog-icon';
import { Illustration } from '@/shared/ui/illustration';
import { ArrowIcon } from './ArrowIcon';

import books from '@/shared/assets/illustrations/books.svg';

const CATEGORIES = [
  {
    title: 'Художня література',
    items: [
      'Сучасна українська проза',
      'Сучасна світова проза',
      'Класична українська проза',
      'Класична світова проза',
      'Детективи та трилери',
      'Горор',
      'Романтична проза',
      'Антології та коротка проза',
      'Історична проза',
      'Міфи, легенди, фольклор',
      'Сучасна українська поезія',
      'Класична українська поезія',
      'Світова поезія',
      'Різдвяні книги для дорослих',
      'Підліткова література',
    ],
  },
  {
    title: 'Нон-фікшн література',
    items: ['Дизайн', 'Креативність', 'Ілюстрація', 'Психологія', 'Копірайтинг'],
  },
  {
    title: 'Бізнес та саморозвиток',
    items: [
      'Історії бізнесів та бізнесменів',
      'Менеджмент та лідерство',
      'Тайм-менеджмент',
      'Мотивація',
      "Кар'єра та професійні навички",
      'Підприємництво',
      'Маркетинг та реклама',
      'Продажі',
      'Економіка',
    ],
  },
  {
    title: 'Програмування',
    items: ['Java', 'PHP', 'C#', 'C++', 'JavaScript', 'Arduino', 'Computer Science', 'Go', 'Ajax', 'Python'],
  },
];

export const MegaMenu = () => (
  <Collapsible.Root>
    <Collapsible.Trigger asChild>
      <Button colorPalette="kowo" rounded="lg" color="#FFF" fontWeight="600">
        <CatalogIcon />
        Каталог
      </Button>
    </Collapsible.Trigger>
    <Collapsible.Content position="absolute" top="72px" zIndex="100" insetInline="0">
      <Box bg="#FFFFFF" borderBottom="1px solid #D4D5D9">
        <Box bgColor={'white'} gap="16px" columns="240px" maxWidth="1224px" marginX="auto" padding="40px 0">
          <Stack gap="24px" marginBottom="24px" css={{ breakInside: 'avoid' }}>
            <Link href="/books?page=1">
              <Stack bg="#F7F8F8" padding="8px" borderRadius="8px">
                <Stack direction="row" justify="space-between">
                  <Text fontWeight="semibold">Усі книги</Text>
                  <ArrowIcon />
                </Stack>
                <Text fontSize="sm">Переглянути всю бібліотеку</Text>
              </Stack>
            </Link>

            <Link href="#">
              <Stack alignItems="start" padding="8px">
                <Illustration src={books.src} alt={'Books'} width={137} height={136} />
                <Stack direction="row" justify="space-between">
                  <Text fontWeight="semibold">Зробіть добру справу!</Text>
                  <ArrowIcon />
                </Stack>
                <Text fontSize="sm">Залиште свою книгу в бібліотеці і вона знайде нового читача!</Text>
              </Stack>
              <Separator />
            </Link>
          </Stack>
          {CATEGORIES.map((category) => (
            <Stack key={category.title} marginBottom="24px" css={{ breakInside: 'avoid' }}>
              <ChakraLink asChild>
                <Link href={`books?page=1&category=${category.title}`}>
                  <Text fontWeight="semibold">{category.title}</Text>
                </Link>
              </ChakraLink>
              <Separator />
              {category.items.map((item) => (
                <ChakraLink asChild key={item}>
                  <Link href={`books?page=1&category=${category.title}&sub_category=${item}`}>
                    <Text fontSize="sm">{item}</Text>
                  </Link>
                </ChakraLink>
              ))}
            </Stack>
          ))}
        </Box>
      </Box>
    </Collapsible.Content>
  </Collapsible.Root>
);
