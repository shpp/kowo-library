import Link from 'next/link';
import { Box, Button, DrawerContext, Separator, Stack, Text, VStack } from '@chakra-ui/react';

import { Illustration } from '@/shared/ui/illustration';
import { DrawerBody, DrawerCloseTrigger, DrawerFooter, DrawerHeader } from '@/shared/ui/drawer';
import { LogoLink } from '@/widgets/logo-link';
import { Navigation } from '@/widgets/navigation';
import { SearchBar } from '@/widgets/search-bar';

import CabinetIcon from '@/shared/assets/icons/cabinet-icon';
import CatalogIcon from '@/shared/assets/icons/catalog-icon';
import FavoriteIcon from '@/shared/assets/icons/favorite-icon';
import books from '@/shared/assets/illustrations/books.svg';
import { ArrowIcon } from '../ArrowIcon';
import { ModalWindow } from '@/shared/ui/modal-window';
import { GoogleLogIn } from '@/features/google-log-in';

export const MenuContent = ({ setStep }: { setStep: (step: number) => void }) => {
  return (
    <DrawerContext>
      {(store) => (
        <>
          <DrawerHeader>
            <Box onClick={() => store.setOpen(false)}>
              <LogoLink height={24} width={200} />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Navigation onClose={() => store.setOpen(false)} direction="column" />
            <VStack height="16px" justifyContent="center">
              <Separator width="100%" />
            </VStack>
            <VStack alignItems="flex-start">
              <ModalWindow
                trigger={
                  <Button gap="8px" p="4px 8px" rounded="lg" height="100%" color="#030712" variant="ghost">
                    <CabinetIcon width="24px" height="24px" />
                    Кабінет
                  </Button>
                }
                content={<GoogleLogIn />}
              />
              <Button gap="8px" p="4px 8px" rounded="lg" height="100%" color="#030712" variant="ghost">
                <FavoriteIcon width="24px" height="24px" />
                Обране
              </Button>
            </VStack>
            <Link href="#">
              <Stack alignItems="start" padding="8px">
                <Illustration src={books.src} alt={'Books'} width={137} height={136} />
                <Stack direction="row" justify="space-between">
                  <Text fontWeight="semibold">Зробіть добру справу!</Text>
                  <ArrowIcon />
                </Stack>
                <Text fontSize="sm">Залиште свою книгу в бібліотеці і вона знайде нового читача!</Text>
              </Stack>
              <Separator />
            </Link>
          </DrawerBody>
          <DrawerFooter>
            <VStack width="100%">
              <Button colorPalette="kowo" rounded="lg" color="#FFF" fontWeight="600" width="100%" onClick={() => setStep(1)}>
                <CatalogIcon />
                Каталог
              </Button>
              <SearchBar onDrawerCLose={() => store.setOpen(false)} />
            </VStack>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </>
      )}
    </DrawerContext>
  );
};
