import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Collapsible,
  Separator,
  Stack,
  Text,
  Link as ChakraLink,
  useDisclosure,
} from '@chakra-ui/react';

import CatalogIcon from '@/shared/assets/icons/catalog-icon';
// import { Illustration } from '@/shared/ui/illustration';
import { ArrowIcon } from './ArrowIcon';
import { getCategories } from '@/actions';
import { useQuery } from '@tanstack/react-query';

export const MegaMenu = () => {
  const { open, onToggle, onClose } = useDisclosure();
  const menuRef = useRef<HTMLDivElement>(null);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  if (isLoading) {
    return (
      <Button
        colorPalette="kowo"
        rounded="lg"
        color="#FFF"
        fontWeight="600"
        loading
      >
        Каталог
      </Button>
    );
  }

  return (
    <div ref={menuRef}>
      <Collapsible.Root open={open} onToggle={onToggle} unmountOnExit>
        <Collapsible.Trigger asChild>
          <Button
            colorPalette="kowo"
            rounded="lg"
            color="#FFF"
            fontWeight="600"
            onClick={onToggle}
          >
            <CatalogIcon />
            Каталог
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content
          position="absolute"
          top="72px"
          zIndex="1000"
          insetInline="0"
        >
          <Box
            bg="#FFFFFF"
            borderBottom="1px solid #D4D5D9"
            paddingInline={'16px'}
          >
            <Box
              bgColor={'white'}
              gap="16px"
              columns="240px"
              maxWidth="1224px"
              marginX="auto"
              padding="40px 0"
            >
              <Stack
                gap="24px"
                marginBottom="24px"
                css={{ breakInside: 'avoid' }}
              >
                <Link href="/books?page=1" onClick={handleLinkClick}>
                  <Stack bg="#F7F8F8" padding="8px" borderRadius="8px">
                    <Stack direction="row" justify="space-between">
                      <Text fontWeight="semibold">Усі книги</Text>
                      <ArrowIcon />
                    </Stack>
                    <Text fontSize="sm">Переглянути всю бібліотеку</Text>
                  </Stack>
                </Link>

                <Link href="#" onClick={handleLinkClick}>
                  {/* <Stack alignItems="start" padding="8px">
                  <Illustration src={books.src} alt={'Books'} width={137} height={136} />
                  <Stack direction="row" justify="space-between">
                    <Text fontWeight="semibold">Зробіть добру справу!</Text>
                    <ArrowIcon />
                  </Stack>
                  <Text fontSize="sm">Залиште свою книгу в бібліотеці і вона знайде нового читача!</Text>
                </Stack> */}
                  {/* <Separator /> */}
                </Link>
              </Stack>
              {categories.map(category => (
                <Stack
                  key={category.title}
                  marginBottom="24px"
                  css={{ breakInside: 'avoid' }}
                >
                  {/*<ChakraLink asChild>*/}
                  {/*<Link href={`books?page=1&category=${category.title}`} onClick={handleLinkClick}>*/}
                  <Text fontWeight="semibold">{category.title}</Text>
                  {/*</Link>*/}
                  {/*</ChakraLink>*/}
                  <Separator />
                  {category.items.map(item => (
                    <ChakraLink asChild key={item}>
                      <Link
                        href={`books?page=1&category=${category.title}&sub_category=${item}`}
                        onClick={handleLinkClick}
                      >
                        <Text fontSize="sm">{item}</Text>
                      </Link>
                    </ChakraLink>
                  ))}
                </Stack>
              ))}
            </Box>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};
