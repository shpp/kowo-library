import React from 'react';
import { Box, Center, Container, Flex, Highlight, ListItem, ListRoot, Separator, Stack } from '@chakra-ui/react';

import { Marker } from './ui/marker';
import { ImageMarker } from './ui/image-marker';
import { KowoHeading } from '@/shared/ui/heading';
import { Illustration } from '@/shared/ui/illustration';

import zoom from '@/shared/assets/markers/zoom.png';
import books from '@/shared/assets/markers/books.png';
import writing from '@/shared/assets/markers/writing.png';
import walkingMan from '@/shared/assets/markers/walking_man.png';
import openedBook from '@/shared/assets/markers/opened_book.png';

import boyWithBook from '@/shared/assets/illustrations/boy-with-book.png';
import girlWithBook from '@/shared/assets/illustrations/girl-with-book.png';

const RULES = [
  'Не пиши у книжках. Навіть якщо дуже хочеться. Навіть якщо сама книжка говорить тобі: “Обери правильну відповідь”. Не слухай її. Хай буде чистою.',
  'Якщо відчуваєш, що не встигнеш дочитати книгу - зателефонуй нам та попередь. Ми дамо тобі ще трохи часу :) Проте максимальний термін прочитання книги - 2 місяці.',
  'На палітурці всередині є невеличкий важливий для нас клаптик паперу: на ньому можна поставити оцінку книжці - допоможи наступному читачеві обрати найцікавішу.',
  'Якщо в тебе є корисна книжка, яку ти вже читав та більше не збираєшся - принось до нас. Поповнюй нашу бібліотеку!',
  'Будь відповідальним: ми довго збирали нашу бібліотеку та серйозно ставимося до її добробуту. Якщо ти взяв книжку, поверни її в тому ж стані або в ще кращому.',
  'Не передавай книжку нікому. Якщо хтось хоче її почитати, порекомендуй нашу бібліотеку - ми залюбки привітаємо нового читача.',
];

const howItWorksPoints = [
  {
    text: <>Знайди книжку, яка тебе цікавить</>,
    image: <ImageMarker url={zoom.src} alt="zoom-icon" />,
  },
  {
    text: (
      <Box>
        <Highlight
          query="Забронювати"
          styles={{
            display: 'inline',
            px: '8px',
            py: '2px',
            bg: '#FFEFEF',
            color: '#FC4141',
            borderRadius: '8px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          Тисни Забронювати якщо вона в наявності.
        </Highlight>{' '}
        <Highlight
          query="Стати в чергу"
          styles={{
            display: 'inline',
            px: '8px',
            py: '2px',
            bg: '#FFFFFF',
            color: '#66A52B',
            border: '1px solid #D4D5D9',
            borderRadius: '8px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          Або Стати в чергу щоб бути в курсі, коли книжка повернеться до бібліотеки.
        </Highlight>
      </Box>
    ),
    image: <ImageMarker url={books.src} alt="books-icon" />,
  },
  {
    text: <>Заповни анкету та обирай строк, за який встигнеш прочитати</>,
    image: <ImageMarker url={writing.src} alt="writting-icon" />,
  },
  {
    text: <>Приходь до KOWO протягом 2 днів та забирай книжку</>,
    image: <ImageMarker url={walkingMan.src} alt="man-walking-icon" />,
  },
  {
    text: <>Читай книжку протягом обраного строку</>,
    image: <ImageMarker url={openedBook.src} alt="open-book-icon" />,
  },
];

export default function HowItWorks() {
  return (
    <Center pt={{ base: '24px', lg: '120px' }} pb={{ base: '24px', lg: '80px' }}>
      <Container maxW="7xl" style={{ display: 'flex', flexDirection: 'column', gap: '36px', paddingInline: '16px' }}>
        <Flex gap="64px" justify="space-between" align="flex-start">
          <Flex direction="column" gap={{ base: '16px', lg: '32px' }} maxW={{ lg: '3xl' }}>
            <KowoHeading textAlign={{base: 'center', lg: 'start'}} size="5xl">Як це працює</KowoHeading>
            <Stack gap="16px" fontSize="20px">
              {howItWorksPoints.map((item, index) => (
                <Flex key={index} gap="16px" justify="flex-start" align="center">
                  {item.image}
                  {item.text}
                </Flex>
              ))}
            </Stack>
          </Flex>
          <Box hideBelow={'lg'} width={{ base: '60%' }}>
            <Illustration src={boyWithBook.src} alt={'Boy with book'} width={boyWithBook.width} height={boyWithBook.height} />
          </Box>
        </Flex>
        <Flex justify="space-between" gap={'16px'} align="flex-start">
          <Box hideBelow={'lg'}>
            <Illustration src={girlWithBook.src} alt={'Boy with book'} width={girlWithBook.width} height={girlWithBook.height} />
          </Box>
          <Flex direction="column" gap={{ base: '16px', lg: '32px' }} w={{ lg: '600px' }}>
            <KowoHeading textAlign={{base: 'center', lg: 'start'}} size="5xl">Декілька правил</KowoHeading>
            <ListRoot listStyle="none" gap="16px">
              {RULES.map((item, index) => {
                return (
                  <Stack key={index} gap="16px">
                    {!!index && <Separator />}
                    <ListItem>
                      <Flex alignItems={{base: 'center', lg: 'start'}} gap="12px">
                        <Marker value={String(index + 1)} />
                        {item}
                      </Flex>
                    </ListItem>
                  </Stack>
                );
              })}
            </ListRoot>
          </Flex>
        </Flex>
      </Container>
    </Center>
  );
}
