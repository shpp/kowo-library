import React, {useState} from "react";
import {Group, Input, InputElement} from "@chakra-ui/react";

import SearchIcon from "@/shared/assets/icons/search-icon";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  
  return (
    <Group width='100%' maxWidth="410px">
      <InputElement pointerEvents="none">
        <SearchIcon/>
      </InputElement>
      <Input
        value={query}
        ps={`calc(var(--input-height) - 6px)`}
        placeholder="Яку книгу або автора ви шукаєте?"
        onChange={(e) => setQuery(e.target.value)}
      />
    </Group>
  )
};