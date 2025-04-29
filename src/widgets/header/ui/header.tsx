'use client';
import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

import { MegaMenu } from '@/features/mega-menu';
import { DrawerMenu } from '@/features/drawer-menu';
import { LogoLink } from '@/widgets/logo-link';
import { Navigation } from '@/widgets/navigation';
import { SearchBar } from '@/widgets/search-bar';
// import FavoriteIcon from '@/shared/assets/icons/favorite-icon';
import MenuIcon from '@/shared/assets/icons/menu-icon';
import { DrawerWrapper } from '@/shared/ui/drawer';
// import {AuthButton} from "@/widgets/header/ui/auth-button";

import styles from './header.module.css';

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
        {/* <HStack gap={'4px'}>
          <AuthButton />
          <Button gap="0" p="4px 8px" rounded="lg" height="100%" color="#030712" variant="ghost" flexDirection="column">
            <FavoriteIcon />
            Обране
          </Button>
        </HStack> */}
      </Flex>
    </header>
  );
};
