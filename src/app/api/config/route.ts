
import { env } from '@/shared/config/env';

export const GET = async () => {
  try {
    const {config} = await fetch(`${env.KOWO_API_BASE_URL}/db/`).then((response) => response.json())
    return Response.json({ config });
  } catch {
    return Response.json({ config: {} });
  }
};

export const runtime = 'edge';
