'use client'
import { Flex, Heading, Text } from '@chakra-ui/react';
// import { Slide } from '@chakra-ui/transition';
import React, { FC } from 'react';
import Image from 'next/image';
import CheckIcon from '@/shared/assets/icons/check-icon';
import RefreshIcon from '@/shared/assets/icons/refrech-icon';

interface IKowoBookProps {
    image: string;
    author: string;
    name: string;
    isLiked: boolean;
    availible: {
        isAvailible: boolean;
        whenAvailible: string; // date or 'now'
    };
}

export const KowoBook: FC<IKowoBookProps> = ({ image, author, name, isLiked, availible }) => {
    // const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            pos={'relative'}
            flexDir={'column'}
            minH={'360px'}
            minW={'230px'}
            rounded={'8px'}
            border={'1px solid rgba(212, 213, 217, 1)'}
            transition={'border-color 0.2s, box-shadow 0.2s'}
            _hover={{
                borderColor: 'transparent',
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
            }}
            // onMouseOver={onOpen}
            // onMouseLeave={onClose}
        >
            <Flex justifyContent={'center'} bgColor={'rgba(0, 0, 0, 0.1)'} rounded={'8px 8px 0px 0px'} minH={'230px'}>
                <Image
                    loading="lazy"
                    src={image}
                    height={230}
                    width={180}
                    alt={`Author: ${author} \n Book: ${name} \n When availible: ${availible} \n Is Liked: ${
                        isLiked === true ? 'Yes' : 'No'
                    } `}
                />
            </Flex>
            <Flex
                bgColor={'white'}
                rounded={'0px 0px 8px 8px'}
                flexDir={'column'}
                height={'100%'}
                padding={'16px'}
                alignItems={'start'}
                justifyContent={'space-between'}
            >
                <Text color={'rgba(102, 106, 121, 1)'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>
                    {author}
                </Text>
                <Heading color={'rgba(3, 7, 18, 1)'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} fontFamily={'inter'}>
                    {name}
                </Heading>
                {availible.isAvailible && (
                    <Flex gap={'4px'} alignItems={'center'}>
                        <CheckIcon />
                        <Text color={'rgba(31, 152, 84, 1)'} fontWeight={400} lineHeight={'18px'} fontSize={'12px'}>
                            В наявності
                        </Text>
                    </Flex>
                )}
                {!availible.isAvailible && (
                    <Flex gap={'4px'} alignItems={'center'}>
                        <RefreshIcon />
                        <Text color={'rgba(214, 114, 0, 1)'} fontWeight={400} lineHeight={'18px'} fontSize={'12px'}>
                            Доступна з {availible.whenAvailible}
                        </Text>
                    </Flex>
                )}
            </Flex>

            {/* <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Flex alignItems={'center'} justifyContent={'center'} width={'48px'} height={'36px'} bgColor={'white'}></Flex>
            </Slide> */}
        </Flex>
    );
};
