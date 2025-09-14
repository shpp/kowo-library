'use client';
import { fetchBooks } from '@/actions';
import { SliderBlock } from '@/widgets/slider-block';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export const BooksNews = () => {
  const { data: allBooks = [], isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });

  const items = useMemo(
    () =>
      allBooks.toSorted((a, b) => b.createdTime - a.createdTime).slice(0, 8),
    [allBooks]
  );

  if (isLoading) return null;

  if (items.length === 0) return null;

  return (
    <SliderBlock
      items={items}
      allItemsUrl="/books?sort=createdTime&order=desc"
      theme="green"
      title="Оновлення нашої бібліотеки!"
      subTitle="Книги вже на полицях. Знайдіть щось для себе"
    />
  );
};
