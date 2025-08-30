export const env = {
  KOWO_API_BASE_URL: process.env.NEXT_PUBLIC_KOWO_API_BASE_URL || 'https://koworouter.com/nano.kowo.space/books.kowo.me',
} as const;

// Validate required environment variables
if (!env.KOWO_API_BASE_URL) {
  throw new Error('NEXT_PUBLIC_KOWO_API_BASE_URL environment variable is required');
}

