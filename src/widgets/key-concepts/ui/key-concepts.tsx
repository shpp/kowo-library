import React from 'react';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { Illustration } from '@/shared/ui/illustration';

import books from '@/shared/assets/illustrations/books.png';
import support from '@/shared/assets/illustrations/support.png';
import kowoBgGreen from '@/shared/assets/backgrounds/kowo-bg-green.png';
import Link from 'next/link';

export const KeyConcepts = () => {
  return (
    <Flex w="100%" h={{ xl: '600px' }} direction={{ base: 'column', xl: 'row' }}>
      <Flex
        justify={{ base: 'center', xl: 'end' }}
        align="center"
        w={{ xl: '50%' }}
        paddingInline={'16px'}
        py={{ base: '50px', md: '70px', xl: '0px' }}
        pr={{ xl: '90px' }}
        bgColor="#172110"
      >
        <Box maxW="500px">
          <Stack gap="50px" align="center">
            <Illustration src={books.src} alt={'Books pile'} width={books.width} height={books.height} />
            <Stack gap="24px" align="center">
              <Stack gap="8px">
                <Heading color="white" fontSize="32px" textAlign="center">
                  Подаруйте книзі друге життя
                </Heading>
                <Text color="white" fontSize="16px" textAlign="center">
                  Ваша прочитана книга може знайти нового читача. Донатьте книги та діліться знаннями!
                </Text>
              </Stack>
              {/* <Button visual={'kowo_white'} border={'none'}>Задонатити книгу</Button> */}
            </Stack>
          </Stack>
        </Box>
      </Flex>
      <Flex
        justify={{ base: 'center', xl: 'start' }}
        pr={{ base: '16px', xl: '0px' }}
        pl={{ base: '16px', xl: '90px' }}
        pt={{ base: '50px', md: '90px', xl: '100px' }}
        w={{ xl: '50%' }}
        bgImage={`url(${kowoBgGreen.src})`}
        bgPos="top"
        bgSize="cover"
      >
        <Box maxW="500px">
          <Stack h="100%" gap="50px" align="center">
            <Stack gap="24px" align="center">
              <Stack gap="8px">
                <Heading color="white" fontSize="32px" textAlign="center">
                  Бібліотека існує завдяки вам!
                </Heading>
                <Text color="white" fontSize="16px" textAlign="center">
                  Ваша підтримка допомагає нам розвиватися та дарувати книги всім охочим. Долучайтеся!
                </Text>
              </Stack>
              <Link href={'https://donate.kowo.me/'}>
                <Button visual={'kowo_white'} border={'none'}>
                  Підтримати фінансово
                </Button>
              </Link>
            </Stack>
            <Illustration src={support.src} alt={'People support'} width={support.width} height={support.height} />
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
