import { IBookStatusProps } from '@/shared/ui/book-status';
import { AspectRatio, Center } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';

interface IBookImageSectionProps {
  authors:  Array<string>;
  status: IBookStatusProps;
  name: string;
  image: string;
  isLiked: boolean;
}

export const BookImageSection: FC<IBookImageSectionProps> = ({ image, status, name, isLiked, authors }) => {
  return (
    <AspectRatio ratio={1 / 1}>
      <Center bgColor={'rgba(0, 0, 0, 0.1)'} rounded={'8px 8px 0px 0px'}>
        <Image
          loading="lazy"
          src={image}
          height={400}
          width={300}
          style={{
            objectFit: 'fill',
            width: '75%',
            height: '100%'
          }}
          alt={`Author: ${authors.join(', ')} \n Book: ${name} \n When available: ${status} \n Is Liked: ${isLiked === true ? 'Yes' : 'No'} `}
        />
      </Center>
    </AspectRatio>
  );
};
