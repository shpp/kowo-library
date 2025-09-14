import React from 'react';
import { Box, Center, Container, Heading, Stack, Text } from '@chakra-ui/react';

import { KeyConcepts } from '@/widgets/key-concepts';
import { Illustration } from '@/shared/ui/illustration';

import kowoBg from '@/shared/assets/backgrounds/kowo-bg.png';
import bookClub from '@/shared/assets/illustrations/book-club.png';
import { BooksNews } from '@/widgets/books-news';
import { BooksRecommended } from '@/widgets/books-recommended';

export default function Home() {
  return (
    <>
      <Box bgImage={`url(${kowoBg.src})`} bgPos="top" bgSize="cover">
        <Center>
          <Container
            maxW="1000px"
            height="650px"
            paddingTop={{ base: '64px', lg: '120px' }}
          >
            <Stack h="100%" justify="space-between">
              <Stack gap="16px">
                <Heading
                  fontSize="56px"
                  fontWeight={600}
                  lineHeight={'100%'}
                  color={'rgba(252, 65, 65, 1)'}
                  textAlign="center"
                >
                  Бібліотека, що працює на довірі
                </Heading>
                <Container maxW="70%">
                  <Text fontSize="20px" textAlign="center">
                    Тут книги можна взяти безкоштовно, а також поділитися
                    своїми. Приєднуйтесь до спільноти книголюбів!
                  </Text>
                </Container>
              </Stack>
              <Illustration
                src={bookClub.src}
                alt={'Book club'}
                width={bookClub.width}
                height={bookClub.height}
              />
            </Stack>
          </Container>
        </Center>
      </Box>
      <BooksNews />
      <BooksRecommended />
      <KeyConcepts />
    </>
  );
}
