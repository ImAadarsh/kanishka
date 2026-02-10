import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Database connection string
const DATABASE_URL = "mysql://u954141192_lifebeyond:1%40Life.Beyond@82.25.121.166:3306/u954141192_lifebeyond";

const pool = mysql.createPool(DATABASE_URL);

// Create table if not exists
const createTableQuery = `
CREATE TABLE IF NOT EXISTS Valentine_DatePlan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    activity_id INT NOT NULL,
    activity_label VARCHAR(255) NOT NULL,
    date_planned DATE NOT NULL,
    time_planned TIME NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

pool.query(createTableQuery, (err) => {
    if (err) {
        console.error("Error creating table:", err);
    } else {
        console.log("Table Valentine_DatePlan is ready.");
    }
});

// API Endpoint to save date plan
app.post('/api/save-date', (req, res) => {
    const { activityId, activityLabel, date, time, mobile } = req.body;

    if (!activityId || !activityLabel || !date || !time || !mobile) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const query = `
        INSERT INTO Valentine_DatePlan (activity_id, activity_label, date_planned, time_planned, mobile)
        VALUES (?, ?, ?, ?, ?)
    `;

    pool.query(query, [activityId, activityLabel, date, time, mobile], (err, result) => {
        if (err) {
            console.error("Error saving date plan:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ success: true, message: "Date plan saved successfully!", id: result.insertId });
    });
});

// API Endpoint to get date plan by ID
app.get('/api/date/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Valentine_DatePlan WHERE id = ?';
    pool.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error fetching date plan:", err);
            return res.status(500).json({ error: "Database error" });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "Date plan not found" });
        }
        res.json(results[0]);
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
