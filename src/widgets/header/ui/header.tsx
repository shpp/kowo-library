'use client'
import {Button, Flex} from "@radix-ui/themes";

import {LogoLink} from "@/widgets/logo-link";
import {Navigation} from "@/widgets/navigation";

import CatalogIcon from "@/shared/assets/icons/catalog-icon";

import styles from "./header.module.css";
import {SearchBar} from "@/widgets/search-bar";
import CabinetIcon from "@/shared/assets/icons/cabinet-icon";
import FavoriteIcon from "@/shared/assets/icons/favorite-icon";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Flex height='100%' align='center' gap='24px' className={styles.header__inner}>
        <LogoLink/>
        <Button size='3' radius='large'>
          <CatalogIcon/>
          Каталог
        </Button>
        <SearchBar/>
        <Navigation/>
        <Flex gap='24px'>
          <Button variant='ghost' color='gray'>
            <Flex height='100%' direction='column' align='center'>
              <CabinetIcon/>
              Кабінет
            </Flex>
          </Button>
          <Button variant='ghost' color='gray'>
            <Flex height='100%' direction='column' align='center'>
              <FavoriteIcon/>
              Обране
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </header>
  )
}
