import { createListCollection } from '@chakra-ui/react';

export const sortingOptions = createListCollection({
  items: [
    { label: 'За замовчуванням', value: 'default' },
    { label: 'Найновіші', value: 'newest' },
    { label: 'За рейтингом', value: 'rating' },
    { label: 'Найпопулярніші', value: 'popular' },
  ],
});
