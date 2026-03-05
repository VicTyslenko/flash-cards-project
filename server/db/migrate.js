import { pool } from "./pool.js";

async function migrate() {
  try {
    console.log("Running migrations...");

    await pool.query(`
      CREATE TABLE IF NOT EXISTS public.flashcards (
        id text PRIMARY KEY,
        question text NOT NULL,
        answer text NOT NULL,
        category text NOT NULL,
        known_count integer DEFAULT 0
      )
    `);

    console.log("Migration complete.");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

migrate();
