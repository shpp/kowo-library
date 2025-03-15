'use client';
import { Box, Button, Center, Flex, Heading, IconButton, Span, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { FC, useCallback } from 'react';
import { KowoBook } from '@/entities/kowo-book/ui/kowo-book';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import kowoBg from '@/shared/assets/backgrounds/kowo-bg.png';
import ArrowRight from '@/shared/assets/icons/arrow-right-icon';
import kosmonawt from './../../../shared/assets/illustrations/kosmonawt.jpg';

interface ISliderBlockProps {
  theme: 'green' | 'white';
  title: string;
  subTitle: string;
}

export const SliderBlock: FC<ISliderBlockProps> = ({ theme, title, subTitle }) => {
  const flexDirection = useBreakpointValue({ base: 'column', xl: 'row' });
  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 5, xl: undefined, xxl: 4 });

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
      <Flex gap={{ base: '32px', xl: '90px' }} flexDirection={flexDirection} maxW="1440px" w="100%">
        <Flex flexDirection="column" alignItems={{ base: 'center', xl: 'start' }} gap="8px" minW={{ base: '100%', xl: '410px' }}>
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
          {flexDirection === 'row' && <NavigationButtons scrollNext={scrollNext} scrollPrev={scrollPrev} theme={theme} />}
        </Flex>

        <Box w="100%" overflow="hidden" ref={emblaRef}>
          <Flex gap="16px" pl={'17px'}>
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <KowoBook
                key={index}
                image={kosmonawt}
                name="Я бачу, вас цікавить пітьма"
                isLiked={false}
                author="Ілларіон Павлюк"
                availible={{ isAvailible: true, whenAvailible: 'now' }}
                width={columns ? `calc((100% - ${16 * (columns! - 2)}px) / ${columns})` : undefined}
              />
            ))}
          </Flex>
        </Box>

        {flexDirection === 'column' && <NavigationButtons scrollNext={scrollNext} scrollPrev={scrollPrev} theme={theme} />}
      </Flex>
    </Center>
  );
};

const NavigationButtons: FC<{ scrollPrev: () => void; scrollNext: () => void; theme: string }> = ({ scrollPrev, scrollNext, theme }) => (
  <Flex flexDir={{ base: 'row', xl: 'column' }} alignItems={{ base: 'center', xl: 'start' }} justifyContent={{ base: 'space-between', xl: 'start' }} gap={{ xl: '90px' }} w="100%">
    <Button w="fit-content" rounded="8px" bgColor="white" color="rgba(102, 165, 43, 1)" border={theme === 'white' ? '1px solid rgba(212, 213, 217, 1)' : 'none'}>
      Переглянути більше
    </Button>
    <Flex gap="16px">
      <IconButton onClick={scrollPrev} w="56px" rounded="8px" bgColor="rgba(0, 0, 0, 0.12)" aria-label="Go to previous carousel item">
        <Span transform={'rotate(180deg)'} >
          <ArrowRight />
        </Span>
      </IconButton>
      <IconButton onClick={scrollNext} w="56px" rounded="8px" bgColor="rgba(0, 0, 0, 0.12)" aria-label="Go to next carousel item">
        <ArrowRight />
      </IconButton>
    </Flex>
  </Flex>
);
