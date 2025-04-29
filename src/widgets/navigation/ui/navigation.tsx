import React, { FC } from 'react';
import Link from 'next/link';
import { Link as ChakraLink, List } from '@chakra-ui/react';

const NAVIGATION_LINKS = [
  { href: '/about', title: 'Про Бібліотеку' },
  { href: '/how-it-works', title: 'Як це працює' },
  // {href: "/support", title: "Підтримка проєкту"},
];

type NavigationProps = {
  direction?: 'row' | 'column';
  onClose?: () => void;
};

export const Navigation: FC<NavigationProps> = ({ direction = 'row', onClose }) => (
  <nav>
    <List.Root flexDirection={direction} gap="12px" listStyleType="none" width="max-content" px="12px">
      {NAVIGATION_LINKS.map(({ href, title }) => (
        <List.Item key={title} flexShrink="0">
          <ChakraLink asChild>
            <Link onClick={onClose && onClose} href={href}>{title}</Link>
          </ChakraLink>
        </List.Item>
      ))}
    </List.Root>
  </nav>
);
