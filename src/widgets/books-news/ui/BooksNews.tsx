'use client';
import { fetchBooks } from '@/actions';
import { SliderBlock } from '@/widgets/slider-block';
import { useQuery } from '@tanstack/react-query';

export const BooksNews = () => {
  const { data: allBooks = [], isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });
  if (isLoading) return null;

  const items = allBooks
    .toSorted((a, b) => b.createdTime - a.createdTime)
    .slice(0, 8);
  return (
    <SliderBlock
      items={items}
      allItemsUrl="/books?sort=createdTime"
      theme="green"
      title="Оновлення нашої бібліотеки!"
      subTitle="Книги вже на полицях. Знайдіть щось для себе"
    />
  );
};
