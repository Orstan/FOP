import { createClient } from 'redis';

let redisClient: ReturnType<typeof createClient> | null = null;

if (process.env.REDIS_URL) {
  redisClient = createClient({
    url: process.env.REDIS_URL,
  });

  redisClient.on('error', (err: Error) => console.error('[REDIS] Client Error', err));

  // Connect the client
  if (!redisClient.isOpen) {
    redisClient.connect().catch(console.error);
  }
}

export const redis = redisClient;
