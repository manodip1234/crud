const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',        // DB host
  user: 'root',             // Your MySQL username
  password: 'yourpassword', // Your MySQL password
  database: 'crud_app'        // Database name
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed: ' + err.stack);
    return;
  }
  console.log('✅ Connected to MySQL as id ' + db.threadId);
});

module.exports = db;