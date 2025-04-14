const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('logFile'), (req, res) => {
  const fileBuffer = req.file.buffer;
  const content = fileBuffer.toString(); // parse CSV here
  // Do process mining logic here
  res.json({ message: 'File uploaded', content: content });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
