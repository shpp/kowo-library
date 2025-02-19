import React from "react";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react"

import styles from './navigation.module.css';

const NAVIGATION_LINKS = [
  {href: "/about", title: "Про Бібліотеку"},
  {href: "/how-it-works", title: "Як це працює"},
  {href: "/support", title: "Підтримка проєкту"},
];

export const Navigation = () => (
  <nav>
    <ul className={styles.ul}>
      {NAVIGATION_LINKS.map(({href, title}) => (
        <li key={title}>
          <ChakraLink asChild>
            <Link href={href} className={styles.link}>
              {title}
            </Link>
          </ChakraLink>
        </li>
      ))}
    </ul>
  </nav>
);
