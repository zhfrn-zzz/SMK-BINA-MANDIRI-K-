import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './db/schema/*',
    dialect: 'postgresql',
    dbCredentials: {
        // Use DIRECT_URL for migrations (port 5432), fallback to DATABASE_URL
        url: process.env.DIRECT_URL || process.env.DATABASE_URL!,
    },
});
