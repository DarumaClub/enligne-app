const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/ping', (req, res) => {
res.json({ message: 'pong depuis VPS 🇯🇵' });
});

app.listen(PORT, () => {
  console.log(`✅ API backend en ligne : http://localhost:${PORT}`);
});
