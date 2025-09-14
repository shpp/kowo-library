import React from 'react';

import FacebookIcon from '@/shared/assets/icons/facebook-icon';
import InstagramIcon from '@/shared/assets/icons/instagram-icon';
import TelegramIcon from '@/shared/assets/icons/telegram-icon';

import styles from './social-networks.module.css';

const SOCIAL_NETWORKS = [
  { icon: <FacebookIcon />, href: 'https://fb.com/kowo.me', alt: 'Facebook' },
  {
    icon: <InstagramIcon />,
    href: 'https://instagram.com/kowo.me',
    alt: 'Instagram',
  },
  { icon: <TelegramIcon />, href: 'https://t.me/kowohub', alt: 'Telegram' },
];

export const SocialNetworks = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        {SOCIAL_NETWORKS.map(({ icon, href, alt }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              aria-label={alt}
              className={styles.link}
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
