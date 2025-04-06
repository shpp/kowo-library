import { Button, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import image from '@/shared/assets/illustrations/girl-with-book-short.svg';
import GoogleIcon from '@/shared/assets/icons/google-icon';

export const GoogleLogIn = () => {
  return (
    <Flex flexDir={{ base: 'column', md: 'row' }} maxW={'790px'} rounded={'8px'}>
      <Center>
        <Image style={{ borderRadius: '8px 0px 0px 8px' }} src={image.src} width={image.width} height={image.height} alt="" />
      </Center>
      <Stack p={'49px 32px'} gap={'24px'}>
        <Stack gap={'8px'}>
          <Heading textAlign={{ base: 'center', md: 'start' }} fontSize={'32px'} fontWeight={600}>
            Увійдіть у свій акаунт
          </Heading>
          <Text textAlign={{ base: 'center', md: 'start' }} fontFamily={'Inter'} lineHeight={'150%'}>
            Щоб позичати книги та зберігати улюблені, увійдіть або зареєструйтесь.
          </Text>
        </Stack>
        <Button bgColor={'white'} color={'kowo.solid'} border={'1px solid rgba(212, 213, 217, 1)'} rounded={'8px'} w={{base: '100%', md: 'fit-content'}}>
          <GoogleIcon />
          Увійти з Google
        </Button>
      </Stack>
    </Flex>
  );
};
