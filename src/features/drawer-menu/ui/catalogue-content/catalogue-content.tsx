import Link from 'next/link';
import {
  Button,
  HStack,
  Link as ChakraLink,
  Separator,
  Stack,
  Text,
  DrawerContext,
} from '@chakra-ui/react';

import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerHeader,
} from '@/shared/ui/drawer/ui/drawer-lib';

import ArrowLeftIcon from '@/shared/assets/icons/arrow-left-icon';
import MenuGreyIcon from '@/shared/assets/icons/menu-grey-icon';
import { ArrowIcon } from '../ArrowIcon';
import { getCategories } from '@/actions';
import { useQuery } from '@tanstack/react-query';
import { encodeQueryParam } from '@/utils';

export const CatalogueContent = ({
  setStep,
}: {
  setStep: (step: number) => void;
}) => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return (
    <DrawerContext>
      {store => (
        <>
          <DrawerHeader padding="16px 20px">
            <HStack>
              <Button
                gap="8px"
                p="4px 8px"
                rounded="lg"
                height="100%"
                variant="ghost"
                onClick={() => setStep(0)}
              >
                <ArrowLeftIcon />
              </Button>
              <HStack>
                <MenuGreyIcon />
                <Text fontSize="20px" fontWeight="semibold">
                  Каталог
                </Text>
              </HStack>
              <DrawerCloseTrigger />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Link onClick={() => store.setOpen(false)} href="/books?page=1">
              <Stack
                bg="#F7F8F8"
                padding="8px"
                borderRadius="8px"
                marginBottom="24px"
              >
                <Stack direction="row" justify="space-between">
                  <Text fontWeight="semibold">Усі книги</Text>
                  <ArrowIcon />
                </Stack>
                <Text fontSize="sm">Переглянути всю бібліотеку</Text>
              </Stack>
            </Link>
            {isLoading && (
              <div>
                <Text>Йде завантаження...</Text>
              </div>
            )}
            {categories.map(category => (
              <Stack
                key={category.title}
                marginBottom="24px"
                css={{ breakInside: 'avoid' }}
              >
                <Text fontWeight="semibold">{category.title}</Text>
                <Separator />
                {category.items.map(item => (
                  <ChakraLink asChild key={item}>
                    <Link
                      onClick={() => store.setOpen(false)}
                      href={`books?page=1&category=${encodeQueryParam(category.title)}&sub_category=${encodeQueryParam(item)}`}
                    >
                      <Text fontSize="sm">{item}</Text>
                    </Link>
                  </ChakraLink>
                ))}
              </Stack>
            ))}
          </DrawerBody>
        </>
      )}
    </DrawerContext>
  );
};
