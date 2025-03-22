'use client';
import { AspectRatio, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import HeartIcon from '@/shared/assets/icons/heart-icon';
import { BookStatus, IBookStatusProps } from '@/shared/ui/book-status';

import styles from './kowo-book.module.css';

interface IKowoBookProps {
  image: string | StaticImageData;
  author: string;
  name: string;
  isLiked: boolean;
  available: IBookStatusProps;
  width?: string;
}

export const KowoBook: FC<IKowoBookProps> = ({ image, author, name, available, isLiked, width = '232px' }) => {
  const [isLikeShown, setIsLikeShown] = useState<boolean>(false);
  const [isLikedLocal, setIsLikedLocal] = useState<boolean>(isLiked);

  const LikeBtnHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLikedLocal(!isLikedLocal);
    // API request functionality
  };

  return (
    <AspectRatio minW={width} ratio={232 / 362}>
      <Flex
        pos={'relative'}
        flexDir={'column'}
        rounded={'8px'}
        border={'1px solid rgba(212, 213, 217, 1)'}
        transition={'border-color 0.2s, box-shadow 0.2s'}
        _hover={{
          borderColor: 'transparent',
          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
        }}
        onMouseEnter={() => setIsLikeShown(true)}
        onMouseLeave={() => setIsLikeShown(false)}
      >
        <Flex justifyContent={'center'} bgColor={'rgba(0, 0, 0, 0.1)'} rounded={'8px 8px 0px 0px'} h={'65%'}>
          <Image
            loading="lazy"
            src={image}
            height={800}
            width={800}
            style={{
              height: '100%',
              width: '75%',
              objectFit: 'fill',
            }}
            alt={`Author: ${author} \n Book: ${name} \n When availible: ${available} \n Is Liked: ${isLiked === true ? 'Yes' : 'No'} `}
          />
        </Flex>
        <Flex
          bgColor={'white'}
          rounded={'0px 0px 8px 8px'}
          flexDir={'column'}
          padding={{ base: '8px', sm: '8px', md: '12px', lg: '12px', xl: '16px' }}
          alignItems={'start'}
          justifyContent={'space-between'}
          w={'100%'}
          h={'35%'}
        >
          <Text color={'rgba(102, 106, 121, 1)'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>
            {author}
          </Text>
          <Heading color={'rgba(3, 7, 18, 1)'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} fontFamily={'inter'} lineClamp={2}>
            {name}
          </Heading>
          <BookStatus {...available} />
        </Flex>
        <Box onClick={(e) => LikeBtnHandler(e)} className={`${styles.likeBtn} ${isLikeShown ? styles.shown : styles.hidden} ${isLikedLocal ? styles.liked : styles.default}`}>
          <HeartIcon />
        </Box>
      </Flex>
    </AspectRatio>
  );
};
