import React from "react";
import Link from "next/link";

import KowoIcon from "@/shared/assets/icons/kowo-icon";

export const LogoLink = () => {
  return (
    <Link href='/'>
      <KowoIcon/>
    </Link>
  )
}
