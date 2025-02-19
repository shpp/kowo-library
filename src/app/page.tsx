import Heading from "@/shared/components/heading";
import {Box, Center, Container, Image, Stack, Text} from "@chakra-ui/react";

export default function Home() {
  return (
      <Box bgImage='url(./kowo-bg.png)' bgPos='top' bgSize='cover'>
          <Center>
              <Container maxW='1000px' height='650px' paddingTop='120px'>
                  <Stack h='100%' justify='space-between'>
                      <Stack gap='16px'>
                          <Heading size='6xl' textAlign='center'>Бібліотека, що працює на довірі</Heading>
                          <Container maxW='70%'>
                              <Text fontSize='20px' textAlign='center'>Тут книги можна взяти безкоштовно, а також поділитися своїми. Приєднуйтесь до спільноти книголюбів!</Text>
                          </Container>
                      </Stack>
                      <Image src='./book-club.png' alt='book club' />
                  </Stack>
              </Container>
          </Center>
      </Box>
  );
}
