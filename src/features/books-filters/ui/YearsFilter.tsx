'use client'
import React, {useState} from "react";
import {Collapsible, HStack, IconButton, Input, Stack, Text} from "@chakra-ui/react";

import {Slider} from "@/shared/ui/slider";
import ChevronUp from "@/shared/assets/icons/chevron-up";
import ChevronDown from "@/shared/assets/icons/chevron-down";


export const YearsFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [values, setValues] = useState([1980, 2030]);
  
  return (
    <Collapsible.Root open={isOpen} onOpenChange={({open}) => setIsOpen(open)}>
      <Collapsible.Trigger asChild>
        <HStack justify="space-between" css={{cursor: 'pointer'}}>
          <Text fontSize='20px' fontWeight="semibold">
            Роки видання
          </Text>
          <IconButton size="xs" variant="plain">
            {isOpen ? <ChevronUp/> : <ChevronDown/>}
          </IconButton>
        </HStack>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Stack gap='12px' pt='8px' width='100%'>
          <Stack direction="row">
            <Input
              value={values[0]}
              onChange={(e) => setValues([Number(e.target.value), values[1]])}
            />
            <Input
              value={values[1]}
              onChange={(e) => setValues([values[0], Number(e.target.value)])}
            />
          </Stack>
          
          <Slider
            min={1970}
            max={2040}
            width="100%"
            defaultValue={values}
            onValueChange={({value}) => setValues(value)}
          />
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
