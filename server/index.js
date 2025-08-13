// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Use the DATABASE_URL env var. DO NOT commit this to git.
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Neon usually needs ssl
});

// GET categories
app.get('/categories', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM categories ORDER BY id');
    res.json(rows);
});

// POST /expenses => { categoryId, amount }
app.post('/expenses', async (req, res) => {
    const { categoryId, amount } = req.body;
    const q = 'INSERT INTO expenses (category_id, amount) VALUES ($1,$2) RETURNING *';
    const { rows } = await pool.query(q, [categoryId, amount]);
    res.json(rows[0]);
});

// GET today's total + breakdown
app.get('/expenses/today', async (req, res) => {
    const totalQ = `SELECT COALESCE(SUM(amount),0) as total FROM expenses WHERE created_at::date = current_date`;
    const breakdownQ = `SELECT c.id, c.name, c.icon, COALESCE(SUM(e.amount),0) as total
                      FROM categories c
                      LEFT JOIN expenses e ON e.category_id = c.id AND e.created_at::date = current_date
                      GROUP BY c.id ORDER BY total DESC`;
    const total = await pool.query(totalQ);
    const breakdown = await pool.query(breakdownQ);
    res.json({ total: total.rows[0].total, breakdown: breakdown.rows });
});

// GET last 7 days aggregated
app.get('/expenses/last7', async (req, res) => {
    const q = `
    SELECT date_trunc('day', created_at) AS day, COALESCE(SUM(amount),0) as total
    FROM expenses
    WHERE created_at >= (now() - interval '6 days')
    GROUP BY 1
    ORDER BY 1;
  `;
    const { rows } = await pool.query(q);
    res.json(rows);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('API listening on', port));
