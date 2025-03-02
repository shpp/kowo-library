import React from "react";
import {Separator, Stack} from "@chakra-ui/react";

import { FilterTags } from "./FilterTags";
import { YearsFilter } from "./YearsFilter";
import { AuthorFilter } from "./AuthorFilter";
import { LanguageFilter } from "./LanguageFilter";
import { AvailabilityFilter } from "./AvailabilityFilter";

export const BooksFilters = () => {
  return (
    <Stack width="100%" maxW="264px" gap='16px' padding='16px'>
      <FilterTags tags={['В наявності', 'Агата Крісті', 'Ілларіон Павлюк']}/>
      <Separator/>
      <AvailabilityFilter/>
      <Separator/>
      <AuthorFilter/>
      <Separator/>
      <LanguageFilter/>
      <Separator/>
      <YearsFilter/>
    </Stack>
  )
}
