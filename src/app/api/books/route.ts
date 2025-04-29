// import {auth} from "@/shared/config/auth";

export type Book = {
  id: number
  name: string
  description: string
  status: string
  categories: string[]
  language: string
  authors: string[]
  year: number
  cover: string
  available: boolean
}

export const GET = async () => {
  try {
    const [{items}, {bookings}] = await Promise.all([fetch('https://REMOVED/books.kowo.me/db/').then((response) => response.json()), fetch('https://REMOVED/books.kowo.me/bookings/frontend/').then((response) => response.json())]);
    return Response.json({ data: items.map((item: Book) => ({...item, available: !bookings[item.id]})) });
  } catch {
    Response.json({ data: [] });
  }
};

// API call example
// fetch("/api/books", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ id: 123 }),
// })

// export const POST = auth(async (req) => {
export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const response = await fetch('https://REMOVED/books.kowo.me/bookings/make/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return Response.json({ success: true })
    }
    return Response.json({ success: false })
  } catch {
    return Response.json({ success: false })
  }
}

export const runtime = 'edge';
