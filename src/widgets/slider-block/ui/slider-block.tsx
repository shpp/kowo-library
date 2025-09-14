'use client';
import React, { FC, useCallback } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Span,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { KowoBook } from '@/entities/kowo-book/ui/kowo-book';

import kowoBg from '@/shared/assets/backgrounds/kowo-bg.png';
import ArrowRight from '@/shared/assets/icons/arrow-right-icon';
import { useRouter } from 'next/navigation';
import { Book } from '@/app/api/books/route';

interface ISliderBlockProps {
  theme: 'green' | 'white';
  title: string;
  subTitle: string;
  items: Book[];
}

export const SliderBlock: FC<ISliderBlockProps> = ({
  theme,
  title,
  subTitle,
  items,
}) => {
  const columns = useBreakpointValue({
    base: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: undefined,
    xxl: 4,
  });
  const content = items;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: 'start',
      containScroll: 'trimSnaps',
    },
    [Autoplay()]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Center
      justifyContent={{ base: 'start', xxl: 'center' }}
      bgImage={theme === 'white' ? `url(${kowoBg.src})` : undefined}
      bgColor="rgba(102, 165, 43, 1)"
      bgPos="top"
      bgSize="cover"
      pl={{ base: '16px', xl: '108px', xxl: '20px' }}
      pr={{ base: '16px', xl: '0px', xxl: '20px' }}
      h={{ base: 'auto', xl: '600px' }}
      py={{ base: '20px', xl: '0' }}
    >
      <Flex
        gap={{ base: '32px', xl: '90px' }}
        flexDirection={{ base: 'column', xl: 'row' }}
        maxW="1440px"
        w="100%"
      >
        <Stack
          alignItems={{ base: 'center', xl: 'start' }}
          gap="8px"
          minW={{ base: '100%', xl: '410px' }}
        >
          <Heading
            cursor="default"
            fontSize={'48px'}
            color={theme === 'white' ? 'rgba(252, 65, 65, 1)' : 'white'}
            lineHeight={'48px'}
            maxWidth={{ base: '100%', xl: '409px' }}
            textAlign={{ base: 'center', xl: 'left' }}
          >
            {title}
          </Heading>
          <Text
            cursor="default"
            maxWidth={{ base: '100%', xl: '360px' }}
            color={theme === 'white' ? 'rgba(3, 7, 18, 1)' : 'white'}
            fontWeight={400}
            fontSize={'20px'}
            lineHeight={'30px'}
            mb={{ base: '0px', xl: '20px' }}
            textAlign={{ base: 'center', xl: 'left' }}
          >
            {subTitle}
          </Text>
          <Box hideBelow={'xl'}>
            <NavigationButtons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
              theme={theme}
            />
          </Box>
        </Stack>

        <Box w="100%" overflow="hidden" ref={emblaRef}>
          <HStack gap="16px" pl={'17px'}>
            {content.map(item => (
              <KowoBook
                key={item.id}
                data={item}
                width={
                  columns
                    ? `calc((100% - ${16 * (columns! - 2)}px) / ${columns})`
                    : undefined
                }
                type="compact"
              />
            ))}
          </HStack>
        </Box>
        <Box hideFrom={'xl'}>
          <NavigationButtons
            scrollNext={scrollNext}
            scrollPrev={scrollPrev}
            theme={theme}
          />
        </Box>
      </Flex>
    </Center>
  );
};

const NavigationButtons: FC<{
  scrollPrev: () => void;
  scrollNext: () => void;
  theme: string;
}> = ({ scrollPrev, scrollNext, theme }) => {
  const router = useRouter();
  return (
    <Flex
      flexDir={{ base: 'row', xl: 'column' }}
      alignItems={{ base: 'center', xl: 'start' }}
      justifyContent={{ base: 'space-between', xl: 'start' }}
      gap={{ xl: '90px' }}
      w="100%"
    >
      <Button
        onClick={() => router.push('/books')}
        visual={'kowo_white'}
        border={theme === 'white' ? '' : 'none'}
      >
        Переглянути більше
      </Button>
      <Flex gap="16px">
        <IconButton
          onClick={scrollPrev}
          w="56px"
          rounded="8px"
          bgColor="rgba(0, 0, 0, 0.12)"
          aria-label="Go to previous carousel item"
        >
          <Span transform={'rotate(180deg)'}>
            <ArrowRight />
          </Span>
        </IconButton>
        <IconButton
          onClick={scrollNext}
          w="56px"
          rounded="8px"
          bgColor="rgba(0, 0, 0, 0.12)"
          aria-label="Go to next carousel item"
        >
          <ArrowRight />
        </IconButton>
      </Flex>
    </Flex>
  );
};
