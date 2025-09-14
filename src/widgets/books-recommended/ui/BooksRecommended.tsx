'use client';
import { fetchBooks } from '@/actions';
import { KOWO_RECOMMENDED_LABEL } from '@/app/books/page';
import { SliderBlock } from '@/widgets/slider-block';
import { useQuery } from '@tanstack/react-query';

export const BooksRecommended = () => {
  const { data: allBooks = [], isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });
  if (isLoading) return null;

  const items = allBooks
    .filter(book => book.isRecommended)
    .toSorted((a, b) => b.createdTime - a.createdTime)
    .slice(0, 8);

  if (items.length === 0) return null;

  return (
    <SliderBlock
      allItemsUrl={encodeURI(`/books?recommendation=${KOWO_RECOMMENDED_LABEL}`)}
      items={items}
      theme="white"
      title="Що варто прочитати?"
      subTitle="Ми зібрали найцікавіші книги, які точно варті вашої уваги."
    />
  );
};
