const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'matahum_db',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Endpoint: Dashboard statistics (counts)
app.get('/api/dashboard', (req, res) => {
    const statsQuery = `
        SELECT 
            (SELECT COUNT(*) FROM users) AS user_count,
            (SELECT COUNT(*) FROM categories) AS category_count,
            (SELECT COUNT(*) FROM products) AS product_count,
            (SELECT SUM(total_amount) FROM sales) AS total_sales;
    `;
    db.query(statsQuery, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to fetch dashboard stats' });
        }
        res.json({ stats: results[0] });
    });
});

// Endpoint: Recent sales (last 5 transactions)
app.get('/api/sales/recent', (req, res) => {
    const recentSalesQuery = `
        SELECT 
            s.id,
            p.name AS product_name,
            s.quantity,
            s.total_amount,
            s.sale_date
        FROM sales s
        JOIN products p ON s.product_id = p.id
        ORDER BY s.sale_date DESC
        LIMIT 5;
    `;
    db.query(recentSalesQuery, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to fetch recent sales' });
        }
        res.json(results);
    });
});

// Endpoint: Low stock alert (quantity < 10 sacks)
app.get('/api/inventory/low-stock', (req, res) => {
    const lowStockQuery = `
        SELECT id, name, quantity 
        FROM products 
        WHERE quantity < 10
        ORDER BY quantity ASC;
    `;
    db.query(lowStockQuery, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to fetch low stock products' });
        }
        res.json(results);
    });
});

// Endpoint: Recently added products (last 5 entries)
app.get('/api/inventory/recent', (req, res) => {
    const recentProductsQuery = `
        SELECT id, name, category_id, quantity, price_per_sack, created_at
        FROM products
        ORDER BY created_at DESC
        LIMIT 5;
    `;
    db.query(recentProductsQuery, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to fetch recently added products' });
        }
        res.json(results);
    });
});

// **New Endpoint: Fetch all products**
app.get('/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ message: 'Error fetching products' });
        }
        res.json(results);
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
