const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',   // ที่อยู่ของเซิร์ฟเวอร์ MySQL (localhost)
    user: 'root',        // ชื่อผู้ใช้ MySQL
    password: '1904',        // รหัสผ่าน MySQL
    database: 'movie_review_web', // ชื่อฐานข้อมูล
    port: '3306'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL Database');
    }
});

// ตัวอย่าง route เชื่อมกับ MySQL
app.get('/mysql', (req, res) => {
    db.query('SELECT id FROM users', (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results);
    });
});


app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});





// Mongodb
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/movie_review_web';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err.message));

// สร้าง Schema และ Model
const usersSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('users', usersSchema);

// ตัวอย่าง route เชื่อมกับ MongoDB
app.get('/mongodb', async (req, res) => {
    try {
        const users = await User.find(); // ค้นหาข้อมูลใน MongoDB
        res.json(users);
    } catch (err) {
        console.error('Error fetching data from MongoDB:', err.message);
        res.status(500).json({ error: 'Database query error' });
    }
});








const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});