const express = require('express');
const app = express();
const data = require('./data.json'); // JSON verilerinizi içe aktarın

app.get('/posts', (req, res) => {
  res.json(data); // JSON verilerini yanıt olarak gönderin
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API sunucusu ${port} numaralı portta çalışıyor.`);
});
