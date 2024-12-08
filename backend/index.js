const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const cors = require('cors');
const multer = require("multer");

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${file.originalname}`;  // Use backticks here
      cb(null, uniqueName);
    },
  });

const upload = multer({ storage: storage});

const db = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'matahum_db'
});

app.post('/products', upload.single('image'), (req, res) => {
    const product_name = req.body.product_name;
    const category = req.body.category;
    const stocks = req.body.stocks;
    const buying_price = req.body.buying_price;
    const selling_price = req.body.selling_price;
    const image = req.file ? req.file.path.replace(/\\/g, "/") : null; // Replace backslashes with forward slashes

    db.query(
        'INSERT INTO products (product_name, category, stocks, buying_price, selling_price, image) VALUES (?,?,?,?,?,?)',
        [product_name, category, stocks, buying_price, selling_price, image],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});


app.get('/products', (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
        }
     })
})

// Update a product
app.put('/products/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { product_name, category, stocks, buying_price, selling_price } = req.body;
    const image = req.file ? req.file.path.replace(/\\/g, "/") : null;
  
    const sqlQuery = `
      UPDATE products 
      SET product_name = ?, category = ?, stocks = ?, buying_price = ?, selling_price = ?, image = ?
      WHERE id = ?
    `;
    db.query(
      sqlQuery,
      [product_name, category, stocks, buying_price, selling_price, image, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error updating product");
        } else {
          res.send("Product updated successfully");
        }
      }
    );
  });

  // Delete a product
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const sqlQuery = 'DELETE FROM products WHERE id = ?';
    db.query(sqlQuery, [id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting product");
      } else {
        res.send("Product deleted successfully");
      }
    });
  });
  

// Fetch all categories
app.get("/categories", (req, res) => {
  const sqlQuery = "SELECT * FROM categories";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching categories");
    } else {
      res.json(result);
    }
  });
});

// Add a new category
app.post("/categories", (req, res) => {
  const { name, description } = req.body;
  const sqlQuery = "INSERT INTO categories (name, description) VALUES (?, ?)";
  db.query(sqlQuery, [name, description], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error adding category");
    } else {
      res.send("Category added successfully");
    }
  });
});

// Fetch all users
app.get("/users", (req, res) => {
    const sqlQuery = "SELECT * FROM users";
    db.query(sqlQuery, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error fetching users");
      } else {
        res.json(result);
      }
    });
  });
  
  // Add a new user
  app.post("/users", (req, res) => {
    const { name, username, role, status } = req.body;
    const sqlQuery = "INSERT INTO users (name, username, role, status) VALUES (?, ?, ?, ?)";
    db.query(sqlQuery, [name, username, role, status], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error adding user");
      } else {
        res.send("User added successfully");
      }
    });
  });
  
  // Update a user
  app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, username, role, status } = req.body;
    const sqlQuery = "UPDATE users SET name = ?, username = ?, role = ?, status = ? WHERE id = ?";
    db.query(sqlQuery, [name, username, role, status, id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating user");
      } else {
        res.send("User updated successfully");
      }
    });
  });
  
  // Delete a user
  app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const sqlQuery = "DELETE FROM users WHERE id = ?";
    db.query(sqlQuery, [id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting user");
      } else {
        res.send("User deleted successfully");
      }
    });
  });

app.listen(5000, ()=> {
    console.log("Server is running on port 5000.");
});