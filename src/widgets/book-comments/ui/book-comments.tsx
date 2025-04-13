// import { BookComment } from '@/entities/book-comment';
import { CreateComment } from '@/features/create-comment';
import { ModalWindow } from '@/shared/ui/modal-window';
import { CustomPagination } from '@/shared/ui/pagination-lib/customPagination';
import { Box, Button, Center, Flex, Heading, Separator, Text } from '@chakra-ui/react';
import React from 'react';

export const BookComments = () => {
  return (
    <Flex flexDir={'column'}>
      <Heading mb={'8px'} fontFamily={'Inter'} fontSize={'20px'} fontWeight={600} lineHeight={'150%'} color={'rgba(3, 7, 18, 1)'}>
        Відгуки (0)
      </Heading>
      <Separator mb={'16px'} />
      <Flex mb={'24px'} flexDir={'column'} gap={'24px'}>
        {/* {[1, 2, 3].map((_, index) => (
          <BookComment key={index} />
        ))} */}
        <Center width={'100%'} height={'96px'}>
          <Text>Тут поки нічого немає...</Text>
        </Center>
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
        <ModalWindow
          trigger={
            <Button visual={'kowo_green'} p={'6px 12px'}>
              Залишити відгук
            </Button>
          }
          content={<CreateComment />}
        />
        <Box hideFrom={'xl'}>
          <CustomPagination type={'compact'} count={1} pageSize={1} page={1} />
        </Box>
        <Box hideBelow={'xl'}>
          <CustomPagination type={'default'} count={1} pageSize={1} page={1} />
        </Box>
      </Flex>
    </Flex>
  );
};
