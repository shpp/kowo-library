import React from 'react'
import { Theme } from "@radix-ui/themes";

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Theme accentColor='lime' grayColor='gray'>
      {children}
    </Theme>
  )
}
