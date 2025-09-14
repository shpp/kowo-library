import { AspectRatio, Center, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC, useState } from 'react';

interface IBookImageSectionProps {
  authors: Array<string>;
  name: string;
  image: string;
  isLiked: boolean;
}

export const BookImageSection: FC<IBookImageSectionProps> = ({
  image,
  name,
  authors,
}) => {
  const [errored, setErrored] = useState(false);

  return (
    <AspectRatio ratio={1}>
      <Center bgColor={'rgba(0, 0, 0, 0.1)'} rounded={'8px 8px 0px 0px'}>
        {errored ? (
          <Text
            fontSize={'16px'}
            fontWeight={500}
            lineHeight={'150%'}
            fontFamily={'Inter'}
          >
            Обкладинка скоро буде
          </Text>
        ) : (
          <Image
            loading="lazy"
            src={image}
            height={400}
            width={300}
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
            onError={() => setErrored(true)}
            alt={`Book: ${name}\nAuthor: ${authors.join(', ')} `}
          />
        )}
      </Center>
    </AspectRatio>
  );
};
