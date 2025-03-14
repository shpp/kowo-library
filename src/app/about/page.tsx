import {Center, Container, Flex, Text} from "@chakra-ui/react";

import {KowoHeading} from "@/shared/ui/heading";

export default function About() {
  return (
    <Center paddingTop='80px' paddingBottom='120px'>
      <Container maxW={{md: '2xl', lg: '3xl', xl: '5xl'}}>
        <Flex gap='32px' direction='column'>
          <KowoHeading size='5xl'>Вітаємо у бібліотеці креативного IT-простору KOWO</KowoHeading>
          <Flex gap='20px' direction='column'>
            <Text fontSize='20px' lineHeight='30px'>
              KOWO - це команда волонтерів, що об’єдналася для розвитку ІТ і
              культури у Кропивницькому та в Україні в цілому.
            </Text>
            <Text fontSize='20px' lineHeight='30px'>
              Декілька років тому ми почали збирати свою невеличку бібліотеку. З
              часом вона ставала все більшою, охочі приносили нам свою книжки і нарешті вони перестали поміщатися на
              полиці.
            </Text>
            <Text fontSize='20px' lineHeight='30px'>
              Зазвичай наші читачі - це наші учні та добрі знайомі. Але ми
              прагнемо
              масштабування. Хочемо щоб наші книжки приносили користь якомога більшій кількості людей, що прагнуть
              розвиватися.
            </Text>
            <Text fontSize='20px' lineHeight='30px'>
              Наша бібліотека - це різноманітнісь історій: тут ви знайдете сучасну
              мотиваційну літературу та вибірку зі шкільної програми. Варто лише подивитися наш каталог та обрати те, що
              вам до душі.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Center>
  )
}