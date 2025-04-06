'use client';
import React from 'react';
import { Button, Flex, HStack } from '@chakra-ui/react';

import { MegaMenu } from '@/features/mega-menu';
import { DrawerMenu } from '@/features/drawer-menu';
import { LogoLink } from '@/widgets/logo-link';
import { Navigation } from '@/widgets/navigation';
import { SearchBar } from '@/widgets/search-bar';
import { ModalWindow } from '@/shared/ui/modal-window';
import { GoogleLogIn } from '@/features/google-log-in';

import CabinetIcon from '@/shared/assets/icons/cabinet-icon';
import FavoriteIcon from '@/shared/assets/icons/favorite-icon';
import MenuIcon from '@/shared/assets/icons/menu-icon';

import styles from './header.module.css';
import { DrawerWrapper } from '@/shared/ui/drawer';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Flex height="100%" padding="0 16px" align="center" justify="space-between" hideFrom="lg">
        <LogoLink height={24} width={200} />
        <DrawerWrapper
          trigger={
            <Button gap="0" p="4px 8px" rounded="lg" height="100%" color="#030712" variant="ghost" flexDirection="column">
              <MenuIcon />
              Меню
            </Button>
          }
          content={<DrawerMenu />}
        />
      </Flex>
      <Flex height="100%" maxWidth="1440px" margin="0 auto" padding="11px 32px;" align="center" gap="12px" hideBelow="lg">
        <LogoLink height={24} width={200} />
        <MegaMenu />
        <SearchBar />
        <Navigation />
        <HStack gap={'4px'}>
          <ModalWindow
            trigger={
              <Button gap="0" p="4px 8px" rounded="lg" height="100%" color="#030712" variant="ghost" flexDirection="column">
                <CabinetIcon width="32px" height={'32px'} />
                Кабінет
              </Button>
            }
            content={<GoogleLogIn />}
          />
          <Button gap="0" p="4px 8px" rounded="lg" height="100%" color="#030712" variant="ghost" flexDirection="column">
            <FavoriteIcon />
            Обране
          </Button>
        </HStack>
      </Flex>
    </header>
  );
};
