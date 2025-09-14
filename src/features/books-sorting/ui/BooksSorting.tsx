'use client';
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/shared/ui/select-lib/select';
import React from 'react';
import { sortingOptions } from '../lib/sortingOptions';
import { Select } from '@chakra-ui/react';

export const BooksSorting = () => {
  return (
    <SelectRoot
      defaultValue={[sortingOptions.items[0].value]}
      collection={sortingOptions}
      width={{ base: '60%', md: '230px' }}
    >
      <Select.Context>
        {({ open }) => (
          <>
            <SelectLabel />
            <SelectTrigger isOpen={open}>
              <SelectValueText />
            </SelectTrigger>
            <SelectContent>
              {sortingOptions.items.map(option => (
                <SelectItem item={option} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </>
        )}
      </Select.Context>
    </SelectRoot>
  );
};
