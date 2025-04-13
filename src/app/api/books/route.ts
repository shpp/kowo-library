// import type { NextApiRequest, NextApiResponse } from 'next';

// type ResponseData = {
//   result: unknown;
// };

// export default async function handler(_: NextApiRequest, res: NextApiResponse<ResponseData>) {
//   try {
//     const response = await fetch('https://REMOVED/books.kowo.me/db/');
//     const data = await response.json();
//     res.status(200).json({ result: data });
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (e: unknown) {
//     res.status(500).json({ result: [] });
//   }
// }

export const GET = async () => {
  try {
    const response = await fetch('https://REMOVED/books.kowo.me/db/');
    const data = await response.json();
    return Response.json({ data: data.items });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: unknown) {
    Response.json({ data: [] });
  }
};
