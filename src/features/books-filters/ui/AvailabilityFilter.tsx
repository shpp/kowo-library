import React from "react";
import {Badge, HStack, Stack} from "@chakra-ui/react";

import {Checkbox} from "@/shared/ui/checkbox";

export const AvailabilityFilter = () => {
  return (
    <Stack>
      <HStack justifyContent='space-between' gap='16px'>
        <Checkbox>В наявності</Checkbox>
        <Badge colorPalette='gray' variant="subtle">235</Badge>
      </HStack>
      <HStack justifyContent='space-between' gap='16px'>
        <Checkbox>Українські автори</Checkbox>
        <Badge colorPalette='gray' variant="subtle">115</Badge>
      </HStack>
    </Stack>
  )
}
