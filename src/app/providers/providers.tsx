'use client';

import React from 'react'
import { Theme } from "@radix-ui/themes";
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
      <ChakraProvider value={defaultSystem}>
          <Theme accentColor='lime' grayColor='gray'>
            {children}
          </Theme>
      </ChakraProvider>
  )
}
