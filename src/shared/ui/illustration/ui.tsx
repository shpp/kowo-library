import React from "react";
import Image from "next/image";
import {Box} from '@chakra-ui/react';

type IllustrationProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const Illustration = ({ src, alt = "", width = 300, height = 200 }: IllustrationProps) => (
  <Box display="flex" justifyContent="center">
    <Image src={src} alt={alt} width={width} height={height} />
  </Box>
);