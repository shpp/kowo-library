import React from "react";
import {Box, Button, HStack, Tag, Text} from "@chakra-ui/react";

export const FilterTags = ({tags}: { tags: string[] }) => {
  return (
    <Box>
      <HStack gap='0'>
        <Text fontSize='20px' fontWeight="semibold">Фільтри</Text>
        {!!tags?.length && <Button variant="plain" css={{color: '#4B8020'}}>Очистити</Button>}
      </HStack>
      <HStack flexWrap="wrap">
        {tags.map((tag) => (
          <Tag.Root key={tag} variant="outline" padding='6px'>
            <Tag.Label>{tag}</Tag.Label>
            <Tag.EndElement>
              <Tag.CloseTrigger/>
            </Tag.EndElement>
          </Tag.Root>
        ))}
      </HStack>
    </Box>
  )
}