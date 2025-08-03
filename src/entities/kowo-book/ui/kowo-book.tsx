'use client';
import { Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
// import HeartIcon from '@/shared/assets/icons/heart-icon';
import { BookStatus } from '@/shared/ui/book-status';
import { useRouter } from 'next/navigation';

import { BookButtons } from './book-buttons/book-buttons';
import { BookButtonsMobile } from './book-buttons-mobile/book-buttons-mobile';
import { BookImageSection } from './book-image-section/book-image-section';

import styles from './kowo-book.module.css';

export type BooksApiResponse = Array<BookApiResponse>;

export type BookApiResponse = {
  id: number;
  name: string;
  description: string;
  status: string;
  categories: Array<string>;
  language: string;
  authors: Array<string>;
  year: number;
  cover: string;
  available: boolean;
};

interface IKowoBookProps {
  data: BookApiResponse;
  width?: string;
  type?: 'compact' | 'full';
}

export const KowoBook: FC<IKowoBookProps> = ({ data, width = '232px', type = 'full' }) => {
  const { cover, authors, name, id, available } = data;
  const [isLikedLocal] = useState<boolean>(false);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const router = useRouter();

  // const LikeBtnHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setIsLikedLocal(!isLikedLocal);
  //   // API request functionality
  // };

  if (isDesktop) {
    return (
      <Stack
        className={styles.kowo_book}
        minW={width}
        maxW={width}
        _hover={{
          borderBottomRadius: type === 'full' ? '0px' : '8px',
        }}
        onClick={() => router.push(`/book/${id}`)}
      >
        <BookImageSection authors={authors} isLiked={isLikedLocal} name={name} image={cover}/>
        <Stack bgColor={'white'} rounded={'0px 0px 8px 8px'} gap={'8px'} p={'16px'} w={'100%'}>
          <Stack gap={'4px'}>
            <Text lineClamp={1} color={'rgba(102, 106, 121, 1)'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>
              {authors.join(', ')}
            </Text>
            <Heading height={'48px'} color={'rgba(3, 7, 18, 1)'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'}
                     fontFamily={'inter'} lineClamp={2}>
              {name}
            </Heading>
          </Stack>
          <BookStatus isAvailable={available} whenAvailable='now' />
        </Stack>
        {type === 'full' && <BookButtons available={{ isAvailable: available, whenAvailable: 'now' }} bookData={data} />}
        {/* <Box onClick={(e) => LikeBtnHandler(e)} className={`${styles.likeBtn} ${isLikedLocal ? styles.liked : styles.default}`}>
          <HeartIcon />
        </Box> */}
      </Stack>
    );
  }
  
  return (
    <Stack minW={width} maxW={width} pos={'relative'} borderRadius={'8px'} gap={'none'}
           border={'1px solid rgba(212, 213, 217, 1)'} onClick={() => router.push(`/book/${id}`)}>
      <BookImageSection authors={authors} isLiked={isLikedLocal} name={name} image={cover} />
      <Stack bgColor={'white'} rounded={'0px 0px 8px 8px'} gap={'6px'} p={'12px'} w={'100%'}>
        <Stack gap={'4px'}>
          <Text lineClamp={1} color={'rgba(102, 106, 121, 1)'} fontWeight={400} fontSize={'14px'} lineHeight={'150%'}>
            {authors.join(', ')}
          </Text>
          <Heading height={'48px'} color={'rgba(3, 7, 18, 1)'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} fontFamily={'inter'} lineClamp={2}>
            {name}
          </Heading>
        </Stack>
        <BookStatus isAvailable={available} whenAvailable='now' />
        <BookButtonsMobile available={{ isAvailable: available, whenAvailable: 'now' }} bookData={data} />
      </Stack>
      {/* <Box onClick={(e) => LikeBtnHandler(e)} className={`${styles.mobileLikeBtn} ${isLikedLocal && styles.liked}`}>
        <HeartIcon />
      </Box> */}
    </Stack>
  );
};

export default KowoBook;
