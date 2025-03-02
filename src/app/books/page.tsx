import React from "react";
import { Flex } from "@chakra-ui/react";

import {BooksFilters} from "@/features/books-filters";

export default function Books() {
  return (
    <Flex maxW='1440px' margin='0 auto'>
      <BooksFilters/>
    </Flex>
  )
}