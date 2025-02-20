'use client';

import React from 'react'
import {ChakraProvider} from "@chakra-ui/react";

import {kowoTheme} from "@/shared/config/theme";

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ChakraProvider value={kowoTheme}>
      {children}
    </ChakraProvider>
  )
}
