'use client';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { StaticImageData } from 'next/image';
import HeartIcon from '@/shared/assets/icons/heart-icon';
import { BookStatus, IBookStatusProps } from '@/shared/ui/book-status';
import { useRouter } from 'next/navigation';
import { useScreenSize } from '@/shared/hooks/useScreenSize/useScreenSize';

import { BookButtons } from './book-buttons/book-buttons';
import { BookButtonsMobile } from './book-buttons-mobile/book-buttons-mobile';
import { BookImageSection } from './book-image-section/book-image-section';

import styles from './kowo-book.module.css';

interface IKowoBookProps {
  image: StaticImageData;
  author: string;
  name: string;
  isLiked: boolean;
  available: IBookStatusProps;
  width?: string;
  type?: 'compact' | 'full';
}

export const KowoBook: FC<IKowoBookProps> = ({ image, author, name, available, isLiked, width = '232px', type = 'full' }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isLikedLocal, setIsLikedLocal] = useState<boolean>(isLiked);
  const { isMobile, isTablet } = useScreenSize();

  const router = useRouter();

  const LikeBtnHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLikedLocal(!isLikedLocal);
    // API request functionality
  };

  if (!isMobile && !isTablet) {
    return (
      <Stack
        minW={width}
        maxW={width}
        pos={'relative'}
        borderRadius={'8px'}
        gap={'none'}
        border={'1px solid rgba(212, 213, 217, 1)'}
        transition={'border-color 0.2s, box-shadow 0.2s'}
        _hover={{
          borderColor: 'rgba(0, 0, 0, 0.1)',
          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
          zIndex: 999,
          borderBottomRadius: available.isAvailable && type === 'full' ? '0px' : '8px',
        }}
        onClick={() => router.push('/book')}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <BookImageSection author={author} isLiked={isLiked} available={available} image={image} />
        <Stack bgColor={'white'} rounded={'0px 0px 8px 8px'} gap={'8px'} p={'16px'} w={'100%'}>
          <Stack gap={'4px'}>
            <Text color={'rgba(102, 106, 121, 1)'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>
              {author}
            </Text>
            <Heading height={'48px'} color={'rgba(3, 7, 18, 1)'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} fontFamily={'inter'} lineClamp={2}>
              {name}
            </Heading>
          </Stack>
          <BookStatus {...available} />
        </Stack>
        {type === 'full' && <BookButtons available={available} isHover={isHover} />}
        <Box onClick={(e) => LikeBtnHandler(e)} className={`${styles.likeBtn} ${isHover ? styles.shown : styles.hidden} ${isLikedLocal ? styles.liked : styles.default}`}>
          <HeartIcon />
        </Box>
      </Stack>
    );
  } else {
    return (
      <Stack
        minW={width}
        maxW={width}
        pos={'relative'}
        borderRadius={'8px'}
        gap={'none'}
        border={'1px solid rgba(212, 213, 217, 1)'}
        transition={'border-color 0.2s, box-shadow 0.2s'}
        onClick={() => router.push('/book')}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <BookImageSection author={author} isLiked={isLiked} available={available} image={image} />
        <Stack bgColor={'white'} rounded={'0px 0px 8px 8px'} gap={'6px'} p={'12px'} w={'100%'}>
          <Stack gap={'4px'}>
            <Text color={'rgba(102, 106, 121, 1)'} fontWeight={400} fontSize={'14px'} lineHeight={'150%'}>
              {author}
            </Text>
            <Heading height={'42px'} color={'rgba(3, 7, 18, 1)'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} fontFamily={'inter'} lineClamp={2}>
              {name}
            </Heading>
          </Stack>
          <BookStatus {...available} />
          <BookButtonsMobile available={available} />
        </Stack>
        <Box onClick={(e) => LikeBtnHandler(e)} className={`${styles.mobileLikeBtn} ${isLikedLocal && styles.liked}`}>
          <HeartIcon />
        </Box>
      </Stack>
    );
  }
};
