import { env } from '@/shared/config/env';

export const GET = async () => {
  try {
    const { config } = await fetch(`${env.KOWO_API_BASE_URL}/db/`, {
      headers: {
        Authorization: `Bearer ${env.KOWO_API_AUTH_TOKEN}`,
      },
      next: {
        revalidate: 60,
      },
    }).then(response => response.json());
    return Response.json({ config });
  } catch (error) {
    console.error('[API] GET /api/config - Failed to fetch config data:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    return Response.json({ config: {} });
  }
};

export const runtime = 'edge';
