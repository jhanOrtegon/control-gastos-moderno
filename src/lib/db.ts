import { Pool } from 'pg';

const globalForPg = globalThis as unknown as {
  pgPool: Pool | undefined;
};

export const pg =
  globalForPg.pgPool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

if (process.env.NODE_ENV !== 'production') globalForPg.pgPool = pg;
