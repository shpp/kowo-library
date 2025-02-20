import React from "react";
import {Container, Flex, Heading, Stack, Text} from "@chakra-ui/react";

import {KowoButton} from "@/shared/ui/button";
import {Illustration} from "@/shared/ui/illustration";

import books from "@/shared/assets/illustrations/books.png";
import support from "@/shared/assets/illustrations/support.png";
import kowoBgGreen from "@/shared/assets/backgrounds/kowo-bg-green.png";

export const KeyConcepts = () => {
  return <Flex w='100%' h='600px'>
    <Flex justify='center' align='center' w='50%' bgColor='#172110'>
      <Container maxW='550px'>
        <Stack gap='50px' align='center'>
          <Illustration src={books.src} alt={'Books pile'} width={books.width} height={books.height}/>
          <Stack gap='24px' align='center'>
            <Stack gap='8px'>
              <Heading color='white' fontSize='32px' textAlign='center'>Подаруйте книзі друге життя</Heading>
              <Text color='white' fontSize='16px' textAlign='center'>Ваша прочитана книга може знайти нового читача. Донатьте книги та діліться знаннями!</Text>
            </Stack>
            <KowoButton>Задонатити книгу</KowoButton>
          </Stack>
        </Stack>
      </Container>
    </Flex>
    <Flex justify='space-between' pt='100px' w='50%' bgImage={`url(${kowoBgGreen.src})`} bgPos='top' bgSize='cover'>
      <Container maxW='550px'>
        <Stack h='100%' gap='50px' align='center'>
          <Stack gap='24px' align='center'>
            <Stack gap='8px'>
              <Heading color='white' fontSize='32px' textAlign='center'>Бібліотека існує завдяки вам!</Heading>
              <Text color='white' fontSize='16px' textAlign='center'>Ваша підтримка допомагає нам розвиватися та дарувати книги всім охочим. Долучайтеся!</Text>
            </Stack>
            <KowoButton>Підтримати фінансово</KowoButton>
          </Stack>
          <Illustration src={support.src} alt={'People support'} width={support.width} height={support.height}/>
        </Stack>
      </Container>
    </Flex>
  </Flex>
}