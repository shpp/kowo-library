import {auth} from "@/shared/config/auth";

export const GET = async () => {
  try {
    const response = await fetch('https://REMOVED/books.kowo.me/db/');
    const data = await response.json();
    return Response.json({ data: data.items });
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

export const POST = auth(async (req) => {
  if (!req.auth) {
    return Response.json({ message: "Not authenticated" }, { status: 401 })
  }
  
  const {id} = await req.json();

  return Response.json({ user: req.auth.user, bookId: id })
})
