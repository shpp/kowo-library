'use client';

import React from 'react'
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ChakraProvider value={defaultSystem}>
      {children}
    </ChakraProvider>
  )
}
