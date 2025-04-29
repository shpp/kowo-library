'use client';

import React from 'react'
import {ChakraProvider} from "@chakra-ui/react";
// import {SessionProvider} from "next-auth/react"

import {kowoTheme} from "@/shared/config/theme";

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // <SessionProvider>
      <ChakraProvider value={kowoTheme}>
        {children}
      </ChakraProvider>
    // </SessionProvider>
  )
}
