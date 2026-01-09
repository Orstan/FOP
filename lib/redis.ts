import { createClient } from 'redis';

// This creates a single, persistent Redis client for the entire application life cycle.
function createRedisClient() {
  if (!process.env.REDIS_URL) {
    console.error('[REDIS] REDIS_URL is not set. Redis client cannot be created.');
    return null;
  }

  try {
    const client = createClient({
      url: process.env.REDIS_URL,
    });

    client.on('error', (err: Error) => console.error('[REDIS] Client Error', err));

    // The client will automatically try to connect and reconnect.
    // We don't need to manage the connection manually in serverless functions.
    client.connect().catch(err => {
      console.error('[REDIS] Failed to connect to Redis:', err);
    });

    return client;
  } catch (error) {
    console.error('[REDIS] Failed to create Redis client:', error);
    return null;
  }
}

export const redis = createRedisClient();
