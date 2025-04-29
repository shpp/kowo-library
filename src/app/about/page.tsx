import { Center, Container, Flex, Text } from '@chakra-ui/react';

import { KowoHeading } from '@/shared/ui/heading';

const textParagraphs = [
  'KOWO - це команда волонтерів, що об’єдналася для розвитку ІТ і культури у Кропивницькому та в Україні в цілому.',
  'Декілька років тому ми почали збирати свою невеличку бібліотеку. З часом вона ставала все більшою, охочі приносили нам свою книжки і нарешті вони перестали поміщатися на полиці.',
  'Зазвичай наші читачі - це наші учні та добрі знайомі. Але ми прагнемо масштабування. Хочемо щоб наші книжки приносили користь якомога більшій кількості людей, що прагнуть розвиватися.',
  'Наша бібліотека - це різноманітнісь історій: тут ви знайдете сучасну мотиваційну літературу та вибірку зі шкільної програми. Варто лише подивитися наш каталог та обрати те, що вам до душі.',
];

export default function About() {
  return (
    <Center pt={{ base: '24px', md: '80px' }} paddingBottom={{ base: '24px', md: '120px' }}>
      <Container maxW={{ md: '2xl', lg: '3xl', xl: '5xl' }}>
        <Flex gap={{ base: '16px', md: '32px' }} direction="column">
          <KowoHeading textAlign={{ base: 'center', md: 'start' }} size={{ base: '4xl', md: '5xl' }}>
            Вітаємо у бібліотеці креативного IT-простору KOWO
          </KowoHeading>
          <Flex gap={{ base: '12px', md: '20px' }} direction="column">
            {textParagraphs.map((item, index) => (
              <Text key={index} fontSize="20px" lineHeight="30px">
                {item}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Center>
  );
}
