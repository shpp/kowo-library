'use client';
import React, { useState } from 'react';
import { Group, Input, InputElement } from '@chakra-ui/react';

import SearchIcon from '@/shared/assets/icons/search-icon';
import { useRouter } from 'next/navigation';

export const SearchBar = ({
  onDrawerCLose,
}: {
  onDrawerCLose?: () => void;
}) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const onClickSearch = () => {
    if (query.length <= 2) return;
    router.push(`/books?page=1&search=${query}`);
    if (onDrawerCLose) onDrawerCLose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onClickSearch();
    }
  };

  return (
    <Group width="100%">
      <InputElement
        transition={'background-color 0.2s'}
        left={'1px'}
        h={'calc(var(--chakra-sizes-full) - 2px)'}
        rounded={'3px'}
        _hover={{ bgColor: 'kowo.contrast' }}
        cursor={'pointer'}
        onClick={onClickSearch}
      >
        <SearchIcon />
      </InputElement>
      <Input
        onKeyDown={handleKeyDown}
        value={query}
        ps={`calc(var(--input-height) + 8px)`}
        placeholder="Яку книгу або автора ви шукаєте?"
        onChange={e => setQuery(e.target.value)}
      />
    </Group>
  );
};
