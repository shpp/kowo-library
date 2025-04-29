import Link from 'next/link';
import { Button, HStack, Link as ChakraLink, Separator, Stack, Text, DrawerContext } from '@chakra-ui/react';

import { DrawerBody, DrawerCloseTrigger, DrawerHeader } from '@/shared/ui/drawer/ui/drawer-lib';

import ArrowLeftIcon from '@/shared/assets/icons/arrow-left-icon';
import MenuGreyIcon from '@/shared/assets/icons/menu-grey-icon';
import { ArrowIcon } from '../ArrowIcon';

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

export const CatalogueContent = ({ setStep }: { setStep: (step: number) => void }) => {
  return (
    <DrawerContext>
      {(store) => (
        <>
          <DrawerHeader padding="16px 20px">
            <HStack>
              <Button gap="8px" p="4px 8px" rounded="lg" height="100%" variant="ghost" onClick={() => setStep(0)}>
                <ArrowLeftIcon />
              </Button>
              <HStack>
                <MenuGreyIcon />
                <Text fontSize="20px" fontWeight="semibold">
                  Каталог
                </Text>
              </HStack>
              <DrawerCloseTrigger />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Link onClick={() => store.setOpen(false)} href="/books?page=1">
              <Stack bg="#F7F8F8" padding="8px" borderRadius="8px" marginBottom="24px">
                <Stack direction="row" justify="space-between">
                  <Text fontWeight="semibold">Усі книги</Text>
                  <ArrowIcon />
                </Stack>
                <Text fontSize="sm">Переглянути всю бібліотеку</Text>
              </Stack>
            </Link>
            {CATEGORIES.map((category) => (
              <Stack key={category.title} marginBottom="24px" css={{ breakInside: 'avoid' }}>
                <ChakraLink asChild>
                  <Link onClick={() => store.setOpen(false)} href={`books?page=1&category=${category.title}`}>
                    <Text fontWeight="semibold">{category.title}</Text>
                  </Link>
                </ChakraLink>
                <Separator />
                {category.items.map((item) => (
                  <ChakraLink asChild key={item}>
                    <Link onClick={() => store.setOpen(false)} href={`books?page=1&category=${category.title}&sub_category=${item}`}>
                      <Text fontSize="sm">{item}</Text>
                    </Link>
                  </ChakraLink>
                ))}
              </Stack>
            ))}
          </DrawerBody>
        </>
      )}
    </DrawerContext>
  );
};
