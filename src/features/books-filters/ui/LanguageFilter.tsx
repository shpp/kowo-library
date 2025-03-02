'use client'
import React, {useState} from "react";
import {Badge, Collapsible, HStack, IconButton, Stack, Text} from "@chakra-ui/react";

import {Checkbox} from "@/shared/ui/checkbox";
import ChevronUp from "@/shared/assets/icons/chevron-up";
import ChevronDown from "@/shared/assets/icons/chevron-down";

const languages = [
  {name: "Українська", count: 125},
  {name: "Англійська", count: 50},
  {name: "Москворота", count: 0},
];

export const LanguageFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  
  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((a) => a !== language)
        : [...prev, language]
    );
  };
  
  return (
    <Collapsible.Root open={isOpen} onOpenChange={({open}) => setIsOpen(open)}>
      <Collapsible.Trigger asChild>
        <HStack justify="space-between" css={{cursor: 'pointer'}}>
          <Text fontSize='20px' fontWeight="semibold">Мова</Text>
          <IconButton size="xs" variant="plain">
            {isOpen ? <ChevronUp/> : <ChevronDown/>}
          </IconButton>
        </HStack>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Stack gap='10px' maxHeight='190px' overflowY='auto' pt='8px'>
          {languages.map((language) => (
            <HStack key={language.name} justifyContent='space-between' gap='16px'>
              <Checkbox
                checked={selectedLanguages.includes(language.name)}
                onChange={() => toggleLanguage(language.name)}
              >
                {language.name}
              </Checkbox>
              <Badge colorPalette='gray' variant="subtle">{language.count}</Badge>
            </HStack>
          ))}
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}