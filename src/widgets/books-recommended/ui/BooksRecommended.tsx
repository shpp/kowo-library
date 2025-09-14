'use client';
import { fetchBooks } from '@/actions';
import { encodeQueryParam, KOWO_RECOMMENDED_LABEL } from '@/utils';
import { SliderBlock } from '@/widgets/slider-block';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export const BooksRecommended = () => {
  const { data: allBooks = [], isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });

  const items = useMemo(
    () =>
      allBooks
        .filter(book => book.isRecommended)
        .toSorted((a, b) => b.createdTime - a.createdTime)
        .slice(0, 8),
    [allBooks]
  );

  if (isLoading) return null;

  if (items.length === 0) return null;

  return (
    <SliderBlock
      allItemsUrl={encodeURI(
        `/books?recommendation=${encodeQueryParam(KOWO_RECOMMENDED_LABEL)}`
      )}
      items={items}
      theme="white"
      title="Що варто прочитати?"
      subTitle="Ми зібрали найцікавіші книги, які точно варті вашої уваги."
    />
  );
};
