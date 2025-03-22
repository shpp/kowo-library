'use client';
import React, { useState } from 'react';
import { Badge, Button, Flex, Heading, RatingGroup, Separator, Span, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { BookStatus } from '@/shared/ui/book-status';
import HeartIcon from '@/shared/assets/icons/heart-icon';
import GreenArrowDownIcon from '@/shared/assets/icons/green-arrow-down-icon';
import { KeyConcepts } from '@/widgets/key-concepts';
import { BookComments } from '@/widgets/book-comments';
import { BookRecommendations } from '@/widgets/book-recommendations';
import { ModalWindow } from '@/shared/ui/modal-window';
import { QueueUp } from '@/features/queue-up';

const imageURL = `data:image/jpeg;base64,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`;

export default function Book() {
  const [clampLines, setClampLines] = useState<string>('3');

  const showMoreHandler = () => {
    if (clampLines === '3') setClampLines('none');
    if (clampLines === 'none') setClampLines('3');
  };
  return (
    <Flex flexDir={'column'}>
      <Flex maxW="1440px" m="0 auto" p={'3dvh 3dvw'} pb={'64px'} flexDir={'column'} gap={'56px'}>
        <Flex gap={'120px'} width={'100%'} alignItems={'start'}>
          <Flex minW={'35dvw'} aspectRatio={'525/500'} bgColor={'rgba(0, 0, 0, 0.1)'} justifyContent={'center'} borderRadius={'8px'}>
            <Image
              width={1}
              height={1}
              src={imageURL}
              alt="some image"
              style={{
                height: '100%',
                width: '70%',
                objectFit: 'fill',
              }}
            />
          </Flex>
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
            <Flex gap={'8px'} marginBottom={'24px'}>
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
                  Показати ще
                </Text>
                <GreenArrowDownIcon />
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
