import React, { FC } from 'react';
import Link from 'next/link';
import { Link as ChakraLink, List } from '@chakra-ui/react';

const NAVIGATION_LINKS = [
  { href: '/about', title: 'Про Бібліотеку', target: '_self' },
  { href: '/how-it-works', title: 'Як це працює', target: '_self' },
  {href: "https://donate.kowo.me/help", title: "Підтримка проєкту", target: '_self'},
];

type NavigationProps = {
  direction?: 'row' | 'column';
  onClose?: () => void;
  style?: React.CSSProperties;
};

export const Navigation: FC<NavigationProps> = ({ direction = 'row', onClose, style }) => (
  <nav style={style}>
    <List.Root flexDirection={direction} gap="12px" listStyleType="none" width="max-content" px="12px">
      {NAVIGATION_LINKS.map(({ href, title, target }) => (
        <List.Item key={title} flexShrink="0">
          <ChakraLink asChild>
            <Link target={target} onClick={onClose && onClose} href={href}>{title}</Link>
          </ChakraLink>
        </List.Item>
      ))}
    </List.Root>
  </nav>
);
