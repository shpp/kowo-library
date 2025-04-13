'use client';
import React, { useState } from 'react';

import GreenArrowDownIcon from '@/shared/assets/icons/green-arrow-down-icon';
import { Box, Button, Flex, Heading, Separator, Text } from '@chakra-ui/react';

export const DescriptionBlock = ({ description }: { description?: string }) => {
  const [clampLines, setClampLines] = useState<string>('3');

  const showMoreHandler = () => {
    if (clampLines === '3') setClampLines('none');
    if (clampLines === 'none') setClampLines('3');
  };
  return (
    <Flex flexDir={'column'} gap={'8px'} mb={'24px'}>
      <Heading fontFamily={'Inter'} fontSize={'20px'} lineHeight={'150%'} fontWeight={600} color={'rgba(3, 7, 18, 1)'}>
        Опис книги
      </Heading>
      <Separator />
      <Text lineClamp={clampLines}>{description}</Text>
      <Button bgColor={'transparent'} alignItems={'center'} justifyContent={'start'} p={'0px'} onClick={showMoreHandler}>
        <Text fontFamily={'Inter'} fontSize={'16px'} fontWeight={600} lineHeight={'150%'} color={'rgba(75, 128, 32, 1)'}>
          {clampLines === 'none' ? 'Сховати' : 'Показати ще'}
        </Text>
        <Box rotate={clampLines === 'none' ? '180deg' : '0deg'}>
          <GreenArrowDownIcon />
        </Box>
      </Button>
    </Flex>
  );
};
