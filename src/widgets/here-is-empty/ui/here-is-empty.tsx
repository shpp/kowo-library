import { Box, Button, Center, Heading, Stack, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React, { FC, ReactNode } from 'react';

import kowoLightGreenBG from './../../../shared/assets/backgrounds/kowo-bg-light-green.png';

import boyWithBook from './../../../shared/assets/illustrations/boy-with-book-noBG.png';
import books from './../../../shared/assets/illustrations/books-whiteBG.png';
import like from './../../../shared/assets/illustrations/like.png';

interface IHereIsEmptyProps {
  type: 'hereIsEmpty' | 'unread' | 'addToLiked' | 'donate';
}

interface ISetup {
  image: StaticImageData;
  title: string;
  text: string;
  button: ReactNode;
}

export const HereIsEmpty: FC<IHereIsEmptyProps> = ({ type }) => {
  const generateSetup = () => {
    switch (type) {
      case 'hereIsEmpty':
        return {
          image: boyWithBook,
          title: 'Тут поки що нічого немає',
          text: 'Але це чудова можливість обрати щось цікаве для читання!',
          button: <LinkButton type="choose" />,
        };
      case 'unread':
        return {
          image: boyWithBook,
          title: 'Ще жодної прочитаної книги',
          text: 'Візьміть книгу, пориньте у світ читання та створюйте свою історію!',
          button: <LinkButton type="choose" />,
        };
      case 'addToLiked':
        return {
          image: like,
          title: 'Додайте книги в обране',
          text: 'Так вам буде легше повернутися до них у будь-який момент!',
          button: <LinkButton type="choose" />,
        };
      case 'donate':
        return {
          image: books,
          title: 'Подаруйте книзі друге життя',
          text: 'Ваша прочитана книга може знайти нового читача. Донатьте книги та діліться знаннями!',
          button: <LinkButton type="donate" />,
        };
      default:
        return {
          image: boyWithBook,
          title: '',
          text: '',
          button: <></>,
        };
    }
  };

  const setup: ISetup = generateSetup();
  return (
    <Center
      justifyContent={'start'}
      height={'324px'}
      width={'100%'}
      bgImage={`url(${kowoLightGreenBG.src})`}
      bgSize={'cover'}
      bgPos={'center'}
      p={'48px 48px 36px 48px'}
      borderRadius={'8px'}
      gap={'64px'}
    >
      <Box hideBelow={'md'} >
        <Image src={setup.image.src} width={setup.image.width} height={setup.image.height} alt="kowo light green background" />
      </Box>
      <Stack gap={'24px'}>
        <Stack gap={'8px'}>
          <Heading fontSize={'32px'} fontWeight={600}>
            {setup.title}
          </Heading>
          <Text fontFamily={'Inter'} fontSize={'16px'} lineHeight={'150%'}>
            {setup.text}
          </Text>
        </Stack>
        {setup.button}
      </Stack>
    </Center>
  );
};

const LinkButton: FC<{ type: 'donate' | 'choose' }> = ({ type }) => {
  return (
    <Button width={'fit-content'} borderRadius={'8px'} color={'white'}>
      {type === 'donate' && <>Задонатити книгу</>}
      {type === 'choose' && <>Обрати книгу</>}
    </Button>
  );
};
