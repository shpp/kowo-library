import React from "react";
import Link from "next/link";
import {Link as RadixLink} from "@radix-ui/themes";

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
          <RadixLink asChild underline='hover' color='gray' className={styles.link}>
            <Link href={href}>
              {title}
            </Link>
          </RadixLink>
        </li>
      ))}
    </ul>
  </nav>
);
