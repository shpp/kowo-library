import React from "react";
import {Box, Center, Container, Stack, Text} from "@chakra-ui/react";

import {KowoHeading} from "@/shared/ui/heading";
import {KeyConcepts} from "@/widgets/key-concepts";
import {Illustration} from "@/shared/ui/illustration";

import kowoBg from "@/shared/assets/backgrounds/kowo-bg.png";
import bookClub from "@/shared/assets/illustrations/book-club.png";

export default function Home() {
  return (
    <>
      <Box bgImage={`url(${kowoBg.src})`} bgPos='top' bgSize='cover'>
        <Center>
          <Container maxW='1000px' height='650px' paddingTop='120px'>
            <Stack h='100%' justify='space-between'>
              <Stack gap='16px'>
                <KowoHeading size='6xl' textAlign='center'>Бібліотека, що працює на довірі</KowoHeading>
                <Container maxW='70%'>
                  <Text fontSize='20px' textAlign='center'>Тут книги можна взяти безкоштовно, а також поділитися своїми.
                    Приєднуйтесь до спільноти книголюбів!</Text>
                </Container>
              </Stack>
              <Illustration src={bookClub.src} alt={'Book club'} width={bookClub.width} height={bookClub.height}/>
            </Stack>
          </Container>
        </Center>
      </Box>
      <KeyConcepts/>
    </>
  );
}
