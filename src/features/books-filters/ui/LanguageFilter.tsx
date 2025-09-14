'use client';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Badge,
  Collapsible,
  HStack,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Checkbox } from '@/shared/ui/checkbox';
import ChevronUp from '@/shared/assets/icons/chevron-up';
import ChevronDown from '@/shared/assets/icons/chevron-down';
import { BooksApiResponse } from '@/entities/kowo-book/ui/kowo-book';
import { useRouter, useSearchParams } from 'next/navigation';
import { languageCodeToNameMap } from '@/utils';

export const LanguageFilter = ({
  books,
}: {
  books: BooksApiResponse | undefined;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(true);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const languages = useMemo(() => {
    if (!books) {
      return [
        { name: 'Українська', count: 0 },
        { name: 'Англійська', count: 0 },
        { name: 'Москворота', count: 0 },
      ];
    }

    const languageMap = books.reduce((acc: { [key: string]: number }, book) => {
      const language = languageCodeToNameMap[book.language];
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    }, {});

    const languageList = [
      { name: 'Українська', count: languageMap['Українська'] || 0 },
      { name: 'Англійська', count: languageMap['Англійська'] || 0 },
      { name: 'Москворота', count: languageMap['Москворота'] || 0 },
    ];

    Object.keys(languageMap).forEach(lang => {
      if (!languageList.some(l => l.name === lang)) {
        languageList.push({ name: lang, count: languageMap[lang] });
      }
    });

    return languageList;
  }, [books]);

  const updateQueryParams = (languages: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('languages');
    params.delete('search');
    params.delete('page');

    languages.forEach(language => {
      params.append('languages', language);
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    const updatedLanguages = checked
      ? [...selectedLanguages, language]
      : selectedLanguages.filter(l => l !== language);

    setSelectedLanguages(updatedLanguages);
    updateQueryParams(updatedLanguages);
  };

  useEffect(() => {
    if (!searchParams) return;
    setSelectedLanguages(searchParams.getAll('languages'));
  }, [searchParams]);

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={({ open }) => setIsOpen(open)}
    >
      <Collapsible.Trigger asChild>
        <HStack justify="space-between" css={{ cursor: 'pointer' }}>
          <Text fontSize="20px" fontWeight="semibold">
            Мова
          </Text>
          <IconButton size="xs" variant="plain">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </HStack>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Stack gap="10px" maxHeight="190px" overflowY="auto" pt="8px">
          {languages.map(language => (
            <HStack
              key={language.name}
              justifyContent="space-between"
              gap="16px"
            >
              <Checkbox
                checked={selectedLanguages.includes(language.name)}
                onCheckedChange={e =>
                  handleLanguageChange(language.name, !!e.checked)
                }
              >
                {language.name}
              </Checkbox>
              <Badge colorPalette="gray" variant="subtle">
                {language.count}
              </Badge>
            </HStack>
          ))}
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
