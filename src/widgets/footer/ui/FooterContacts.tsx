import React from 'react';
import { Flex, Stack, Text, Link as ChakraLink } from '@chakra-ui/react';

import PhoneIcon from '@/shared/assets/icons/phone-icon';
import EmailIcon from '@/shared/assets/icons/email-icon';

export const FooterContacts = () => {
  return (
    <Stack gap="32px">
      <Flex direction="column" gap="6px">
        <Text fontWeight="semibold">Завітайте до нас</Text>
        <div>
          <Text as="p">пров. Василівський, 10, 5 поверх</Text>
          <Text as="p">Пн-Пт з 9:00 до 20:00</Text>
        </div>
      </Flex>
      <Flex direction="column" gap="6px">
        <Text fontWeight="semibold">Контакти</Text>
        <Flex align="center" gap="8px">
          <PhoneIcon />
          <ChakraLink href="tel:0950007075">095 000 70 75</ChakraLink>
        </Flex>
        <Flex align="center" gap="8px">
          <EmailIcon />
          <ChakraLink href="mailto:info@kowo.me">info@kowo.me</ChakraLink>
        </Flex>
      </Flex>
    </Stack>
  );
};
