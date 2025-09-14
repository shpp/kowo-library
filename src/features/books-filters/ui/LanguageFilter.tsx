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
import {
  LanguageCode,
  languageCodeToNameMap,
  LanguageName,
  languageNameToCodeMap,
} from '@/utils';

export const LanguageFilter = ({
  books,
  potentialBooksCountsByLanguage,
}: {
  books: BooksApiResponse | undefined;
  potentialBooksCountsByLanguage: Record<LanguageCode, number>;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(true);
  const [selectedLanguages, setSelectedLanguages] = useState<LanguageName[]>([
    languageCodeToNameMap['ua'],
    languageCodeToNameMap['en'],
  ]);

  const languages = useMemo(() => {
    const languageMap = (books ?? []).reduce(
      (acc: Record<LanguageCode, number>, book) => {
        const language = book.language;
        acc[language] = (acc[language] || 0) + 1;
        return acc;
      },
      {
        ua: 0,
        en: 0,
        ru: 0,
      } as const
    );

    return Object.entries(languageMap).map(([name, count]) => ({
      name: languageCodeToNameMap[name as LanguageCode],
      count,
    }));
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

  const handleLanguageChange = (language: LanguageName, checked: boolean) => {
    const updatedLanguages = checked
      ? [...selectedLanguages, language]
      : selectedLanguages.filter(l => l !== language);

    setSelectedLanguages(updatedLanguages);
    updateQueryParams(updatedLanguages);
  };

  useEffect(() => {
    if (searchParams?.has('languages')) {
      setSelectedLanguages(searchParams.getAll('languages') as LanguageName[]);
    } else {
      setSelectedLanguages([
        languageCodeToNameMap['ua'],
        languageCodeToNameMap['en'],
      ]);
    }
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
                {language.count ||
                  potentialBooksCountsByLanguage[
                    languageNameToCodeMap[language.name]
                  ] ||
                  '0'}
              </Badge>
            </HStack>
          ))}
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
