import React from "react";
import {Flex} from "@chakra-ui/react";

export const Marker = ({value}: {
  value: string;
}) => {
  return (
    <Flex p='4px' w='24px' h='24px' minW='24px' minH='24px' justify='center' align='center' boxSizing='border-box' bg='#F2F8E9' color='#4B8020' borderRadius='50%'>
      {value}
    </Flex>
  )
}
