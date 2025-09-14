'use client';
import { fetchBooks } from '@/actions';
import { SliderBlock } from '@/widgets/slider-block';
import { useQuery } from '@tanstack/react-query';

export const BooksRecommended = () => {
  const { data: allBooks = [], isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });
  if (isLoading) return null;

  const items = allBooks.toSorted((a, b) => a.year - b.year).slice(0, 5);
  return (
    <SliderBlock
      items={items}
      theme="white"
      title="Що варто прочитати?"
      subTitle="Ми зібрали найцікавіші книги, які точно варті вашої уваги."
    />
  );
};
