const express = require('express');
const path = require('path');

const app = require('./api/server.js');


app.use(express.static(path.join(__dirname, 'build')));
app.get('/auth/callback', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`boardgameshelf is listening on localhost ${process.env.SERVER_PORT}`);
});
