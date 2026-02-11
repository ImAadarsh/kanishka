import mysql from 'mysql2/promise';

const DATABASE_URL = "mysql://u954141192_lifebeyond:1%40Life.Beyond@82.25.121.166:3306/u954141192_lifebeyond";

async function migrate() {
  const connection = await mysql.createConnection(DATABASE_URL);
  try {
    console.log("Adding slug column...");
    await connection.query(`
      ALTER TABLE Valentine_DatePlan
      ADD COLUMN slug VARCHAR(255) UNIQUE AFTER id;
    `);
    console.log("Column added successfully.");
  } catch (error) {
    if (error.code === 'ER_DUP_FIELDNAME') {
      console.log("Column already exists.");
    } else {
      console.error("Migration failed:", error);
    }
  } finally {
    await connection.end();
  }
}

migrate();
