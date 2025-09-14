import React from 'react';
import Link from 'next/link';
import { Stack, Text, Link as ChakraLink } from '@chakra-ui/react';

export const FooterNavigation = () => {
  return (
    <Stack gap="14px">
      <Text fontWeight="semibold">Навігація</Text>
      <ChakraLink asChild>
        <Link href="/about">Про Бібліотеку</Link>
      </ChakraLink>
      <ChakraLink asChild>
        <Link href="/how-it-works">Як це працює</Link>
      </ChakraLink>
      <ChakraLink asChild>
        <Link target="_blank" href="https://donate.kowo.me/help">
          Підтримка проєкту
        </Link>
      </ChakraLink>
    </Stack>
  );
};
