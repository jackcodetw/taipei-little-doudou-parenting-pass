export function migrateDatabase() {
  const db = useDatabase()
  db.sql`CREATE TABLE IF NOT EXISTS urls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    account TEXT,
    password TEXT,
    email TEXT,
    name TEXT
  )`
}
