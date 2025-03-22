import { BookComment } from '@/entities/book-comment';
import { CreateComment } from '@/features/create-comment';
import { ModalWindow } from '@/shared/ui/modal-window';
import { CustomPagination } from '@/shared/ui/pagination-lib/customPagination';
import { Button, Flex, Heading, Separator } from '@chakra-ui/react';
import React from 'react';

export const BookComments = () => {
  return (
    <Flex flexDir={'column'}>
      <Heading mb={'8px'} fontFamily={'Inter'} fontSize={'20px'} fontWeight={600} lineHeight={'150%'} color={'rgba(3, 7, 18, 1)'}>
        Відгуки (15)
      </Heading>
      <Separator mb={'16px'} />
      <Flex mb={'24px'} flexDir={'column'} gap={'24px'}>
        {[1, 2, 3].map((_, index) => (
          <BookComment key={index} />
        ))}
      </Flex>
      <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
        <ModalWindow
          trigger={
            <Button borderRadius={'8px'} bgColor={'kowo.solid'} color={'rgba(245, 245, 245, 1)'} p={'6px 12px'}>
              Залишити відгук
            </Button>
          }
          content={<CreateComment />}
        />
        <CustomPagination pagesCount={10} pageSize={3} defaultPage={1} />
      </Flex>
    </Flex>
  );
};
