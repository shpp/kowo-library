import React from 'react';
import { Badge, Box, Button, Flex, Heading, Span, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { BookStatus } from '@/shared/ui/book-status';
import { KeyConcepts } from '@/widgets/key-concepts';
// import { BookComments } from '@/widgets/book-comments';
import { BookRecommendations } from '@/widgets/book-recommendations';
import { ModalWindow } from '@/shared/ui/modal-window';
import { QueueUp } from '@/features/queue-up';

// import HeartIcon from '@/shared/assets/icons/heart-icon';
import { DescriptionBlock } from '../ui/description-block/description-block';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';
import {redirect} from "next/navigation";

async function fetchBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/books`, {
    cache: 'force-cache',
    next: { revalidate: 3600}
  });
  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await res.json();
  return data.data;
}

export default async function Book({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const books: BooksApiResponse = await fetchBooks();

  const currentBookData = books.find((item) => item.id === +resolvedParams.slug);
  if (!currentBookData) {
    return redirect('/');
  }

  return (
    <Flex flexDir={'column'}>
      <Flex maxW="1440px" m="0 auto" p={{ base: '3dvh 16px', xl: '3dvh 108px' }} pb={'64px'} flexDir={'column'} gap={'56px'}>
        <Box hideFrom={'md'} width={'100%'}>
          <BookImage cover={currentBookData?.cover} />
        </Box>
        <Flex gap={{ base: '16px', xl: '120px' }} width={'100%'} alignItems={'start'}>
          <Box hideBelow={'md'} width={'45%'}>
            <BookImage cover={currentBookData?.cover} />
          </Box>
          <Flex flexDir={'column'} width={{base: '100%', md: '55%'}}>
            <Heading color={'rgba(3, 7, 18, 1)'} fontSize={'48px'} fontWeight={600} lineHeight={'100%'} marginBottom={'8px'}>
              {currentBookData?.name}
            </Heading>
            <Text fontFamily={'Inter'} fontSize={'20px'} fontWeight={400} lineHeight={'150%'} marginBottom={'16px'}>
              {currentBookData?.authors.join(', ')}
            </Text>
            {/* <Flex marginBottom={'24px'} gap={'8px'}>
              <RatingGroup.Root readOnly defaultValue={0} count={5} colorPalette={'yellow'}>
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
                0 відгуків
              </Text>
            </Flex> */}
            <Flex gap={'8px'} marginBottom={'24px'} flexWrap={'wrap'}>
              <Badge borderRadius={'8px'} bgColor={'rgba(247, 248, 248, 1)'} display={'flex'} flexDir={'column'} alignItems={'start'} padding={'8px'}>
                <Text color={'rgba(3, 7, 18, 1)'} fontSize={'16px'} fontWeight={600} lineHeight={'150%'} fontFamily={'Inter'}>
                  Мова
                </Text>
                <Text color={'rgba(3, 7, 18, 1)'} fontSize={'16px'} fontWeight={400} lineHeight={'150%'} fontFamily={'Inter'}>
                  {currentBookData?.language === 'ru' && 'Москворота'}
                  {currentBookData?.language === 'ua' && 'Українська'}
                  {currentBookData?.language === 'en' && 'Англійська'}
                </Text>
              </Badge>
              <Badge borderRadius={'8px'} bgColor={'rgba(247, 248, 248, 1)'} display={'flex'} flexDir={'column'} alignItems={'start'} padding={'8px'}>
                <Text color={'rgba(3, 7, 18, 1)'} fontSize={'16px'} fontWeight={600} lineHeight={'150%'} fontFamily={'Inter'}>
                  Рік видання
                </Text>
                <Text color={'rgba(3, 7, 18, 1)'} fontSize={'16px'} fontWeight={400} lineHeight={'150%'} fontFamily={'Inter'}>
                  {currentBookData?.year}
                </Text>
              </Badge>
            </Flex>
            <Span marginBottom={'16px'}>
              <BookStatus isAvailable={currentBookData.available} whenAvailable="now" />
            </Span>
            <Flex gap={'16px'} mb={'48px'}>
              <ModalWindow
                trigger={
                  <Button p={'8px 64px'} visual={'kowo_red'}>
                    Забронювати
                  </Button>
                }
                content={<QueueUp book={currentBookData} />}
              />
              {/* <Button border={'1px solid rgba(212, 213, 217, 1)'} borderRadius={'8px'} bgColor={'white'}>
                <HeartIcon />
              </Button> */}
            </Flex>
            <DescriptionBlock description={currentBookData?.description} />
            {/* <BookComments /> */}
          </Flex>
        </Flex>
        {/* <BookRecommendations type="history" /> */}
        <BookRecommendations type="recommendations" />
      </Flex>
      <KeyConcepts />
    </Flex>
  );
}

const BookImage = ({ cover }: { cover?: string }) => {
  return (
    <Flex w={'100%'} aspectRatio={'525/500'} bgColor={'rgba(0, 0, 0, 0.1)'} justifyContent={'center'} borderRadius={'8px'}>
      <Image
        loading="lazy"
        width={300}
        height={400}
        src={cover ? cover : ''}
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
