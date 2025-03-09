import { Avatar, Card, Flex, HStack, RatingGroup, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const BookComment = () => {
  return (
    <Card.Root width="100%" border={'none'}>
      <Card.Body p={'0'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} mb={'8px'}>
          <HStack gap="8px">
            <Avatar.Root>
              <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
              <Avatar.Fallback name="Nate Foss" />
            </Avatar.Root>
            <Stack gap="0">
              <Text fontFamily={'Inter'} fontSize={'14px'} fontWeight={600} lineHeight={'150%'} color={'black'}>
                Alla Komarova
              </Text>
              <Text fontFamily={'Inter'} fontSize={'14px'} fontWeight={400} lineHeight={'20px'} color={'black'}>
                20.10.2023
              </Text>
            </Stack>
          </HStack>

          <RatingGroup.Root count={5} defaultValue={3} colorPalette={'yellow'}>
            <RatingGroup.HiddenInput />
            <RatingGroup.Control>
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingGroup.Item key={index} index={index + 1}>
                  <RatingGroup.ItemIndicator />
                </RatingGroup.Item>
              ))}
            </RatingGroup.Control>
          </RatingGroup.Root>
        </Flex>
        <Card.Description>
          <Text fontFamily={'Inter'} fontSize={'14px'} fontWeight={400} color={'rgba(3, 7, 18, 1)'} lineHeight={'20px'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi iusto obcaecati illo magnam facilis doloribus voluptatem molestiae earum expedita, harum tempore,
            possimus eveniet necessitatibus, ducimus praesentium reiciendis sequi perspiciatis laboriosam dolorem deserunt excepturi commodi dolores! Quae in rerum quia fugiat!
          </Text>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};
