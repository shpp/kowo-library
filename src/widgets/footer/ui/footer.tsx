import React from "react";
import Link from "next/link";
import {Flex, Text, Link as RadixLink} from "@radix-ui/themes";

import {LogoLink} from "@/widgets/logo-link/ui/logo-link";
import {SocialNetworks} from "@/widgets/social-networks";

import PhoneIcon from "@/shared/assets/icons/phone-icon";
import EmailIcon from "@/shared/assets/icons/email-icon";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <Flex width='50%' direction='column' justify='between'>
          <LogoLink/>
          <SocialNetworks/>
        </Flex>
        
        <Flex width='50%' gap='16px'>
          <Flex direction='column' gap='14px'>
            <Text weight='bold'>Навігація</Text>
            <RadixLink asChild underline='hover' color='gray'>
              <Link href='/about'>
                Про Бібліотеку
              </Link>
            </RadixLink>
            <RadixLink asChild underline='hover' color='gray'>
              <Link href='/how-it-works'>
                Як це працює
              </Link>
            </RadixLink>
            <RadixLink asChild underline='hover' color='gray'>
              <Link href='/support'>
                Підтримка проєкту
              </Link>
            </RadixLink>
          </Flex>
          
          <Flex direction='column' align='center' flexGrow='1'>
            <Flex direction='column' gap='32px'>
              <Flex direction='column' gap='6px'>
                <Text weight='bold'>Завітайте до нас</Text>
                <div>
                  <Text as="p">пров. Василівський, 10, 5 поверх</Text>
                  <Text as="p">Пн-Пт з 9:00 до 20:00</Text>
                </div>
              </Flex>
              <Flex direction='column' gap='6px'>
                <Text weight='bold'>Контакти</Text>
                <Flex align='center' gap='8px'>
                  <PhoneIcon/>
                  <RadixLink href="tel:0950007075" underline='hover' color='gray'>
                    095 000 70 75
                  </RadixLink>
                </Flex>
                <Flex align='center' gap='8px'>
                  <EmailIcon/>
                  <RadixLink href='mailto:info@kowo.me' underline='hover' color='gray'>
                    info@kowo.me
                  </RadixLink>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </footer>
  )
}
