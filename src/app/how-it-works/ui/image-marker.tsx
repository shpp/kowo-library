import React from "react";
import Image from "next/image";
import {Box} from "@chakra-ui/react";

export const ImageMarker = ({url, alt}: {
  url: string;
  alt: string;
}) => {
  return (
    <Box w='50px' h='50px' bgColor='#F2F8E9' p='10px' boxSizing='border-box' borderRadius='50%'>
      <Box w='30px' h='30px'>
        <Image src={url} alt={alt} width={30} height={30} />
      </Box>
    </Box>
  )
}