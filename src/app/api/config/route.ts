
export const GET = async () => {
  try {
    const {config} = await fetch('https://koworouter.com/nano.kowo.space/books.kowo.me/db/').then((response) => response.json())
    return Response.json({ config });
  } catch {
    Response.json({ config: {} });
  }
};

export const runtime = 'edge';
