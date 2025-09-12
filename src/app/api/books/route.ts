import { env } from '@/shared/config/env';
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
    const [{items}, {bookings}] = await Promise.all([
      fetch(`${env.KOWO_API_BASE_URL}/db/`, {
        headers: {
          'Authorization': `Bearer ${env.KOWO_API_AUTH_TOKEN}`,
        },
      }).then((response) => response.json()),
      fetch(`${env.KOWO_API_BASE_URL}/bookings/frontend/`, {
        headers: {
          'Authorization': `Bearer ${env.KOWO_API_AUTH_TOKEN}`,
        },
      }).then((response) => response.json())
    ]);
    return Response.json({ data: items.filter((item: Book) => item.status === 'open').map((item: Book) => ({...item, available: !bookings[item.id]})) });
  } catch (error) {
    console.error('[API] GET /api/books - Failed to fetch books data:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });
    return Response.json({ data: [] });
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
    const response = await fetch(`${env.KOWO_API_BASE_URL}/bookings/make/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.KOWO_API_AUTH_TOKEN}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return Response.json({ success: true })
    }
    console.error('[API] POST /api/books - External API returned error status:', {
      status: response.status,
      statusText: response.statusText,
      timestamp: new Date().toISOString(),
      requestData: data
    });
    return Response.json({ success: false })
  } catch (error) {
    console.error('[API] POST /api/books - Failed to make booking:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });
    return Response.json({ success: false })
  }
}

export const runtime = 'edge';
