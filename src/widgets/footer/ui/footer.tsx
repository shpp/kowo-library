import React from "react";
import Link from "next/link";
import {Flex, Text, Link as ChakraLink} from "@chakra-ui/react";

import {LogoLink} from "@/widgets/logo-link";
import {SocialNetworks} from "@/widgets/social-networks";
import PhoneIcon from "@/shared/assets/icons/phone-icon";
import EmailIcon from "@/shared/assets/icons/email-icon";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Flex gap='16px' className={styles.footer__inner}>
        <Flex width='50%' direction='column' justify='space-between'>
          <LogoLink/>
          <SocialNetworks/>
        </Flex>
        
        <Flex width='50%' gap='16px'>
          <Flex direction='column' gap='14px'>
            <Text fontWeight="semibold">Навігація</Text>
            <ChakraLink asChild>
              <Link href='/about'>
                Про Бібліотеку
              </Link>
            </ChakraLink>
            <ChakraLink asChild>
              <Link href='/how-it-works'>
                Як це працює
              </Link>
            </ChakraLink>
            <ChakraLink asChild>
              <Link href='/support'>
                Підтримка проєкту
              </Link>
            </ChakraLink>
          </Flex>
          
          <Flex direction='column' align='center' flexGrow='1'>
            <Flex direction='column' gap='32px'>
              <Flex direction='column' gap='6px'>
                <Text fontWeight="semibold">Завітайте до нас</Text>
                <div>
                  <Text as="p">пров. Василівський, 10, 5 поверх</Text>
                  <Text as="p">Пн-Пт з 9:00 до 20:00</Text>
                </div>
              </Flex>
              <Flex direction='column' gap='6px'>
                <Text fontWeight="semibold">Контакти</Text>
                <Flex align='center' gap='8px'>
                  <PhoneIcon/>
                  <ChakraLink href="tel:0950007075">
                    095 000 70 75
                  </ChakraLink>
                </Flex>
                <Flex align='center' gap='8px'>
                  <EmailIcon/>
                  <ChakraLink href='mailto:info@kowo.me'>
                    info@kowo.me
                  </ChakraLink>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  )
}
