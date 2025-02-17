import React, {useState} from "react";
import {Box, IconButton, TextField} from "@radix-ui/themes";

import SearchIcon from "@/shared/assets/icons/search-icon";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  
  return (
    <Box width='100%' maxWidth="410px">
      <TextField.Root
        size="3"
        value={query}
        placeholder="Яку книгу або автора ви шукаєте?"
        onChange={(e) => setQuery(e.target.value)}
      >
        <TextField.Slot side='right'>
          <IconButton size="1" variant="ghost">
            <SearchIcon/>
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
    </Box>
  )
};