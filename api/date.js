import mysql from 'mysql2/promise';

const DATABASE_URL = "mysql://u954141192_lifebeyond:1%40Life.Beyond@82.25.121.166:3306/u954141192_lifebeyond";

const pool = mysql.createPool(DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    // Try to find by slug first, then ID (for backward compatibility if needed, though id is int)
    const query = 'SELECT * FROM Valentine_DatePlan WHERE slug = ? OR id = ?';
    const [results] = await pool.execute(query, [id, id]);

    if (results.length === 0) {
      return res.status(404).json({ error: "Date plan not found" });
    }

    res.status(200).json(results[0]);
  } catch (error) {
    console.error("Error fetching date plan:", error);
    res.status(500).json({ error: "Database error" });
  }
}
