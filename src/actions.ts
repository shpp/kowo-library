import { Book } from './app/api/books/route';

export async function fetchBooks(): Promise<Book[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/books`);
  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await res.json();
  data.data.forEach((book: Book) => {
    book.createdTime = new Date(book.createdTime).getTime();
  });
  return data.data;
}

export type Category = {
  title: string;
  items: string[];
};

export async function getCategories(): Promise<Category[]> {
  const response = await fetch('/api/config');
  const { config } = await response.json();

  return Object.entries(config.categories).map(([title, items]) => ({
    title,
    items: items as string[],
  }));
}
