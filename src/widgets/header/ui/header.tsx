'use client'
import {Button, Flex} from "@chakra-ui/react";

import {LogoLink} from "@/widgets/logo-link";
import {Navigation} from "@/widgets/navigation";
import {SearchBar} from "@/widgets/search-bar";
import CatalogIcon from "@/shared/assets/icons/catalog-icon";
import CabinetIcon from "@/shared/assets/icons/cabinet-icon";
import FavoriteIcon from "@/shared/assets/icons/favorite-icon";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Flex height='100%' maxWidth='1440px' margin='0 auto' padding='11px 32px;' align='center' gap='12px'>
        <LogoLink/>
        <Button colorPalette='kowo' rounded="lg" color='#FFF' fontWeight='600'>
          <CatalogIcon/>
          Каталог
        </Button>
        <SearchBar/>
        <Navigation/>
        <Flex>
          <Button
            gap='0'
            p='4px 8px'
            rounded="lg"
            height='100%'
            color='#030712'
            variant='ghost'
            flexDirection="column"
          >
            <CabinetIcon/>
            Кабінет
          </Button>
          <Button
            gap='0'
            p='4px 8px'
            rounded="lg"
            height='100%'
            color='#030712'
            variant='ghost'
            flexDirection="column"
          >
            <FavoriteIcon/>
            Обране
          </Button>
        </Flex>
      </Flex>
    </header>
  )
}
