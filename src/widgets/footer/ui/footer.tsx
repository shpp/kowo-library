import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import { LogoLink } from '@/widgets/logo-link';
import { SocialNetworks } from '@/widgets/social-networks';
import { FooterContacts } from './FooterContacts';
import { FooterNavigation } from './FooterNavigation';

import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Flex
        gap="16px"
        padding={{ base: '40px 15px', md: '64px 15px', lg: '64px' }}
        margin="0 auto"
        maxWidth="1440px"
      >
        <Flex
          width={{ base: '100%', md: '50%' }}
          direction="column"
          justify="space-between"
          gap="32px"
        >
          <LogoLink />
          <Box hideFrom="lg">
            <FooterNavigation />
          </Box>
          <Box hideFrom="md">
            <FooterContacts />
          </Box>
          <SocialNetworks />
        </Flex>

        <Flex width="50%" gap="16px" hideBelow="md">
          <Box hideBelow="lg">
            <FooterNavigation />
          </Box>
          <Flex direction="column" align="center" flexGrow="1">
            <FooterContacts />
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};
