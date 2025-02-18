import ImageMarker from "@/app/how-it-works/_components/image-marker";
import {Box, Center, Container, Flex, Highlight, Image, ListItem, ListRoot, Stack} from "@chakra-ui/react";
import Heading from "@/shared/components/heading";

const rules = [
    'Не пиши у книжках. Навіть якщо дуже хочеться. Навіть якщо сама книжка говорить тобі: “Обери правильну відповідь”. Не слухай її. Хай буде чистою.',
    'Якщо відчуваєш, що не встигнеш дочитати книгу - зателефонуй нам та попередь. Ми дамо тобі ще трохи часу :) Проте максимальний термін прочитання книги - 2 місяці.',
    'На палітурці всередині є невеличкий важливий для нас клаптик паперу: на ньому можна поставити оцінку книжці - допоможи наступному читачеві обрати найцікавішу.',
    'Якщо в тебе є корисна книжка, яку ти вже читав та більше не збираєшся - принось до нас. Поповнюй нашу бібліотеку!',
    'Будь відповідальним: ми довго збирали нашу бібліотеку та серйозно ставимося до її добробуту. Якщо ти взяв книжку, поверни її в тому ж стані або в ще кращому.',
    'Не передавай книжку нікому. Якщо хтось хоче її почитати, порекомендуй нашу бібліотеку - ми залюбки привітаємо нового читача.',
]

export default function HowItWorks() {

    return <Center pt='120px' pb='80px'>
        <Container maxW='7xl'>
            <Flex h='700px' gap='64px' justify='space-between' align='flex-start'>
                <Container maxW='2xl'>
                    <Heading size='5xl' marginBottom='32px'>Як це працює</Heading>
                    <Stack gap='16px' fontSize='20px'>
                        <Flex gap='16px' justify='flex-start' align='center'>
                            <ImageMarker url="./zoom.png" />
                            Знайди книжку, яка тебе цікавить
                        </Flex>
                        <Flex gap='16px' justify='flex-start' align='center'>
                            <ImageMarker url="./books.png" />
                            <Box>
                                <Highlight
                                    query='Забронювати'
                                    styles={{ display: 'inline', px: "8px", py: '2px', bg: "#FFEFEF", color: "#FC4141", borderRadius: '8px', fontWeight: 600, whiteSpace: 'nowrap' }}
                                >
                                    Тисни Забронювати якщо вона в наявності.
                                </Highlight>
                                {' '}
                                <Highlight
                                    query='Стати в чергу'
                                    styles={{ display: 'inline', px: "8px", py: '2px', bg: "#FFFFFF", color: "#66A52B", border: '1px solid #D4D5D9', borderRadius: '8px', fontWeight: 600, whiteSpace: 'nowrap' }}
                                >
                                    Або Стати в чергу щоб бути в курсі, коли книжка повернеться до бібліотеки.
                                </Highlight>

                            </Box>
                        </Flex>
                        <Flex gap='16px' justify='flex-start' align='center'>
                            <ImageMarker url="./writing.png" />
                            Заповни анкету та обирай строк, за який встигнеш прочитати
                        </Flex>
                        <Flex gap='16px' justify='flex-start' align='center'>
                            <ImageMarker url="./walking_man.png" />
                            Приходь до KOWO протягом 2 днів та забирай книжку
                        </Flex>
                        <Flex gap='16px' justify='flex-start' align='center'>
                            <ImageMarker url="./opened_book.png" />
                            Читай книжку протягом обраного строку
                        </Flex>
                    </Stack>
                </Container>
                <Box>
                    <Image src='./rules_first-screen.png' alt='man' />
                </Box>
            </Flex>
            <Flex justify='space-between' align='flex-start'>
                <Box>
                    <Image src='./rules_second-screen.png' alt='woman' />
                </Box>
                <Box w='600px'>
                    <Heading size='5xl' marginBottom='32px'>Декілька правил</Heading>
                    <ListRoot listStyle='none' >
                        {
                            rules.map((item, index) =>
                                <ListItem key={index} css={{ '&:not(:last-child)': { paddingBottom: '16px', marginBottom: '16px', borderBottom: '1px solid #D4D5D9' } }}>
                                    <Flex gap='12px'>
                                        <Flex p='4px' w='24px' h='24px' minW='24px' minH='24px' justify='center' align='center' boxSizing='border-box' bg='#F2F8E9' color='#4B8020' borderRadius='50%'>
                                            {index + 1}
                                        </Flex>
                                        {item}
                                    </Flex>
                                </ListItem>
                            )
                        }
                    </ListRoot>
                </Box>
            </Flex>
        </Container>
    </Center>
}