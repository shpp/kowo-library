import React from "react";
import Link from "next/link";
import { Link as ChakraLink, List } from "@chakra-ui/react"

import styles from './navigation.module.css';

const NAVIGATION_LINKS = [
  {href: "/about", title: "Про Бібліотеку"},
  {href: "/how-it-works", title: "Як це працює"},
  // {href: "/support", title: "Підтримка проєкту"},
];

export const Navigation = ({direction = 'row'}: {direction?: 'row' | 'column'}) => (
  <nav>
    <List.Root className={styles.ul} flexDirection={direction}>
      {NAVIGATION_LINKS.map(({href, title}) => (
        <List.Item key={title} flexShrink='0'>
          <ChakraLink asChild>
            <Link href={href} className={styles.link}>
              {title}
            </Link>
          </ChakraLink>
        </List.Item>
      ))}
    </List.Root>
  </nav>
);
