import {Box, Flex, Stack, Image, Heading, Text, Center, Container} from "@chakra-ui/react";
import Button from "@/shared/components/button";

export default function Component() {
    return <Flex w='100%' h='600px'>
        <Flex justify='center' align='center' w='50%' bgColor='#172110'>
            <Container maxW='550px'>
                <Stack gap='50px' align='center'>
                    <Image src='./books-image1.png' alt='books' w='250px' h='250px' />
                    <Stack gap='24px' align='center'>
                        <Stack gap='8px'>
                            <Heading color='white' fontSize='32px' textAlign='center'>Подаруйте книзі друге життя</Heading>
                            <Text color='white' fontSize='16px' textAlign='center'>Ваша прочитана книга може знайти нового читача. Донатьте книги та діліться знаннями!</Text>
                        </Stack>
                        <Button>Задонатити книгу</Button>
                    </Stack>
                </Stack>
            </Container>
        </Flex>
        <Flex justify='space-between' pt='100px' w='50%' bgImage='url(./kowo-bg-green.png)' bgPos='top' bgSize='cover'>
            <Container maxW='550px'>
                <Stack h='100%' gap='50px' align='center'>
                    <Stack gap='24px' align='center'>
                        <Stack gap='8px'>
                            <Heading color='white' fontSize='32px' textAlign='center'>Бібліотека існує завдяки вам!</Heading>
                            <Text color='white' fontSize='16px' textAlign='center'>Ваша підтримка допомагає нам розвиватися та дарувати книги всім охочим. Долучайтеся!</Text>
                        </Stack>
                        <Button>Підтримати фінансово</Button>
                    </Stack>
                    <Image src='./support-image.png' alt='books' />
                </Stack>
            </Container>
        </Flex>
    </Flex>
}