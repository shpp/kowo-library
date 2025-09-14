import React, { SVGProps } from 'react';
import Link from 'next/link';

import KowoIcon from '@/shared/assets/icons/kowo-icon';

export const LogoLink = ({
  width = 267,
  height = 34,
}: SVGProps<SVGSVGElement>) => {
  return (
    <Link href="/">
      <KowoIcon width={width} height={height} />
    </Link>
  );
};
