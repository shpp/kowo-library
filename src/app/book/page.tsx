'use client';
import React, { useState } from 'react';
import { Badge, Box, Button, Flex, Heading, RatingGroup, Separator, Span, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { BookStatus } from '@/shared/ui/book-status';
import HeartIcon from '@/shared/assets/icons/heart-icon';
import GreenArrowDownIcon from '@/shared/assets/icons/green-arrow-down-icon';
import { KeyConcepts } from '@/widgets/key-concepts';
import { BookComments } from '@/widgets/book-comments';
import { BookRecommendations } from '@/widgets/book-recommendations';
import { ModalWindow } from '@/shared/ui/modal-window';
import { QueueUp } from '@/features/queue-up';
import { useScreenSize } from '@/shared/hooks/useScreenSize/useScreenSize';

import kosmonawt from './../../shared/assets/illustrations/kosmonawt.jpg';

export default function Book() {
  const [clampLines, setClampLines] = useState<string>('3');

  const { isMobile } = useScreenSize();

  const showMoreHandler = () => {
    if (clampLines === '3') setClampLines('none');
    if (clampLines === 'none') setClampLines('3');
  };
  return (
    <Flex flexDir={'column'}>
      <Flex maxW="1440px" m="0 auto" p={{ base: '3dvh 16px', xl: '3dvh 108px' }} pb={'64px'} flexDir={'column'} gap={'56px'}>
        {isMobile && <BookImage />}
        <Flex gap={{ base: '16px', xl: '120px' }} width={'100%'} alignItems={'start'}>
          {!isMobile && <BookImage />}
          <Flex flexDir={'column'} width={'100%'}>
            <Heading color={'rgba(3, 7, 18, 1)'} fontSize={'48px'} fontWeight={600} lineHeight={'100%'} marginBottom={'8px'}>
              Я бачу, вас цікавить пітьма
            </Heading>
            <Text fontFamily={'Inter'} fontSize={'20px'} fontWeight={400} lineHeight={'150%'} marginBottom={'16px'}>
              Ілларіон Павлюк
            </Text>
            <Flex marginBottom={'24px'} gap={'8px'}>
              <RatingGroup.Root readOnly defaultValue={4} count={5} colorPalette={'yellow'}>
                <RatingGroup.HiddenInput />
                <RatingGroup.Control>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <RatingGroup.Item key={index} index={index + 1}>
                      <RatingGroup.ItemIndicator />
                    </RatingGroup.Item>
                  ))}
                </RatingGroup.Control>
              </RatingGroup.Root>
              <Text fontFamily={'Inter'} fontSize={'16px'} fontWeight={400} lineHeight={'150%'} color={'rgba(75, 128, 32, 1)'}>
                15 відгуків
              </Text>
            </Flex>
            <Flex gap={'8px'} marginBottom={'24px'} flexWrap={'wrap'}>
              {[1, 2, 3, 4].map((_, index) => (
                <Badge borderRadius={'8px'} bgColor={'rgba(247, 248, 248, 1)'} key={index} display={'flex'} flexDir={'column'} alignItems={'start'} padding={'8px'}>
                  <Text color={'rgba(3, 7, 18, 1)'} fontSize={'16px'} fontWeight={600} lineHeight={'150%'} fontFamily={'Inter'}>
                    Мова
                  </Text>
                  <Text color={'rgba(3, 7, 18, 1)'} fontSize={'16px'} fontWeight={400} lineHeight={'150%'} fontFamily={'Inter'}>
                    Українська
                  </Text>
                </Badge>
              ))}
            </Flex>
            <Span marginBottom={'16px'}>
              <BookStatus isAvailable={true} whenAvailable="21.11.21" />
            </Span>
            <Flex gap={'16px'} mb={'48px'}>
              <ModalWindow
                trigger={
                  <Button disabled={false} p={'8px 64px'} width={'fit-content'} color={'rgba(245, 245, 245, 1)'} bgColor={'rgba(252, 65, 65, 1)'} borderRadius={'8px'}>
                    Забронювати
                  </Button>
                }
                content={<QueueUp />}
              />
              <Button border={'1px solid rgba(212, 213, 217, 1)'} borderRadius={'8px'} bgColor={'white'}>
                <HeartIcon />
              </Button>
            </Flex>
            <Flex flexDir={'column'} gap={'8px'} mb={'24px'}>
              <Heading fontFamily={'Inter'} fontSize={'20px'} lineHeight={'150%'} fontWeight={600} color={'rgba(3, 7, 18, 1)'}>
                Опис книги
              </Heading>
              <Separator />
              <Text lineClamp={clampLines}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima sed omnis! Totam suscipit voluptates natus doloribus porro vitae ratione at cumque?
                Necessitatibus quod fugiat minima maiores a soluta vero aut architecto nemo commodi. Quod facilis tempora adipisci voluptate? Labore quos quas unde a architecto sit
                provident repellat quae id explicabo facilis, exercitationem iure officiis enim perspiciatis eaque deserunt! Quasi error nisi officiis fuga quaerat aspernatur,
                accusamus nobis sint impedit consectetur neque distinctio labore cum perferendis qui corporis tempora nesciunt temporibus delectus. Quaerat temporibus commodi dicta
                cupiditate sapiente iusto magnam ipsum velit! Temporibus explicabo corrupti odit fuga debitis culpa fugiat.
              </Text>
              <Button bgColor={'transparent'} alignItems={'center'} justifyContent={'start'} p={'0px'} onClick={showMoreHandler}>
                <Text fontFamily={'Inter'} fontSize={'16px'} fontWeight={600} lineHeight={'150%'} color={'rgba(75, 128, 32, 1)'}>
                  {clampLines === 'none' ? 'Сховати' : 'Показати ще'}
                </Text>
                <Box rotate={clampLines === 'none' ? '180deg' : '0deg'} >
                  <GreenArrowDownIcon />
                </Box>
              </Button>
            </Flex>
            <BookComments />
          </Flex>
        </Flex>
        <BookRecommendations type="history" />
        <BookRecommendations type="recommendations" />
      </Flex>
      <KeyConcepts />
    </Flex>
  );
}

const BookImage = () => {
  return (
    <Flex minW={{ base: '48dvw', xl: '40%' }} aspectRatio={'525/500'} bgColor={'rgba(0, 0, 0, 0.1)'} justifyContent={'center'} borderRadius={'8px'}>
      <Image
        width={kosmonawt.width}
        height={kosmonawt.height}
        src={kosmonawt.src}
        alt="some image"
        style={{
          height: '100%',
          width: '70%',
          objectFit: 'fill',
        }}
      />
    </Flex>
  );
};
