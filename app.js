


const express = require("express");
const db = require('./db');  
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());


app.post('/api/users', (req, res) => {
  
  const { name, email, age } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required" });
  }

  const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
  db.query(sql, [name, email, age], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ 
      message: "User added successfully!", 
      userId: result.insertId 
    });
  });
});



app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});