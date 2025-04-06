import { IBookStatusProps } from '@/shared/ui/book-status';
import { AspectRatio, Center } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

interface IBookImageSectionProps {
  author: string;
  available: IBookStatusProps;
  image: StaticImageData;
  isLiked: boolean;
}

export const BookImageSection: FC<IBookImageSectionProps> = ({ image, available, isLiked, author }) => {
  return (
    <AspectRatio ratio={1 / 1}>
      <Center bgColor={'rgba(0, 0, 0, 0.1)'} rounded={'8px 8px 0px 0px'}>
        <Image
          loading="lazy"
          src={image.src}
          height={image.height}
          width={image.width}
          style={{
            height: '100%',
            width: '75%',
            objectFit: 'fill',
          }}
          alt={`Author: ${author} \n Book: ${name} \n When available: ${available} \n Is Liked: ${isLiked === true ? 'Yes' : 'No'} `}
        />
      </Center>
    </AspectRatio>
  );
};
