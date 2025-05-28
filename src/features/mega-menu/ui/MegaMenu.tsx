import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { Box, Button, Collapsible, Separator, Stack, Text, Link as ChakraLink, useDisclosure } from '@chakra-ui/react';

import CatalogIcon from '@/shared/assets/icons/catalog-icon';
// import { Illustration } from '@/shared/ui/illustration';
import { ArrowIcon } from './ArrowIcon';

type Category = {
  title: string;
  items: string[];
}

export const MegaMenu = () => {
  const { open, onToggle, onClose } = useDisclosure();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/config");
        const { config } = await response.json();
        
        const transformedCategories = Object.entries(config.categories).map(
          ([title, items]) => ({
            title,
            items: items as string[]
          })
        );
        
        setCategories(transformedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCategories();
  }, []);
  
  const handleLinkClick = () => {
    onClose();
  };
  
  if (loading) {
    return (
      <Button colorPalette="kowo" rounded="lg" color="#FFF" fontWeight="600" loading>
        Каталог
      </Button>
    );
  }
  
  return (
    <Collapsible.Root open={open} onToggle={onToggle} unmountOnExit>
      <Collapsible.Trigger asChild>
        <Button colorPalette="kowo" rounded="lg" color="#FFF" fontWeight="600" onClick={onToggle}>
          <CatalogIcon />
          Каталог
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content position="absolute" top="72px" zIndex="1000" insetInline="0">
        <Box bg="#FFFFFF" borderBottom="1px solid #D4D5D9" paddingInline={'16px'}>
          <Box bgColor={'white'} gap="16px" columns="240px" maxWidth="1224px" marginX="auto" padding="40px 0">
            <Stack gap="24px" marginBottom="24px" css={{ breakInside: 'avoid' }}>
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
            {categories.map((category) => (
              <Stack key={category.title} marginBottom="24px" css={{ breakInside: 'avoid' }}>
                {/*<ChakraLink asChild>*/}
                  {/*<Link href={`books?page=1&category=${category.title}`} onClick={handleLinkClick}>*/}
                    <Text fontWeight="semibold">{category.title}</Text>
                  {/*</Link>*/}
                {/*</ChakraLink>*/}
                <Separator />
                {category.items.map((item) => (
                  <ChakraLink asChild key={item}>
                    <Link href={`books?page=1&category=${category.title}&sub_category=${item}`} onClick={handleLinkClick}>
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
  );
};
