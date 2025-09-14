'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import {SessionProvider} from "next-auth/react"

import { kowoTheme } from '@/shared/config/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // <SessionProvider>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={kowoTheme}>{children}</ChakraProvider>
    </QueryClientProvider>
    // </SessionProvider>
  );
};
