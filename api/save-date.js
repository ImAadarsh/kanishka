import mysql from 'mysql2/promise';

const DATABASE_URL = "mysql://u954141192_lifebeyond:1%40Life.Beyond@82.25.121.166:3306/u954141192_lifebeyond";

const pool = mysql.createPool(DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { activityId, activityLabel, date, time, mobile } = req.body;

  if (!activityId || !activityLabel || !date || !time || !mobile) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const query = `
        INSERT INTO Valentine_DatePlan (activity_id, activity_label, date_planned, time_planned, mobile)
        VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.execute(query, [activityId, activityLabel, date, time, mobile]);
    res.status(200).json({ success: true, message: "Date plan saved successfully!", id: result.insertId });
  } catch (error) {
    console.error("Error saving date plan:", error);
    res.status(500).json({ error: "Database error" });
  }
}
