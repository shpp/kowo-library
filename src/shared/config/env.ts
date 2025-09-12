export const env = {
  // URL and TOKEN must not be NEXT_PUBLIC_
  KOWO_API_BASE_URL: process.env.KOWO_API_BASE_URL,
  KOWO_API_AUTH_TOKEN: process.env.KOWO_API_AUTH_TOKEN,
} as const;

// Validate required environment variables
if (!env.KOWO_API_BASE_URL) {
  throw new Error('KOWO_API_BASE_URL environment variable is required');
}
if (!env.KOWO_API_AUTH_TOKEN) {
  throw new Error('KOWO_API_AUTH_TOKEN environment variable is required');
}

