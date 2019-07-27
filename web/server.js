// include the express module
const express = require('express');
const app = express();

//specify a port for the web server
const port = 3001;
const base = `${__dirname}/public`;

//specify middleware to server static files as a base url 
app.use(express.static('public'));

//send a specific file
app.get('/', function(req, res) {
  res.sendFile(`${base}/device-list.html`);
});

app.get('/register-device', (req, res) => {
  res.sendFile(`${base}/register-device.html`);
});
app.get('/send-command', (req, res) => {
  res.sendFile(`${base}/send-command.html`);
});

app.get('/about', (req, res) => {
  res.sendFile(`${base}/about-me.html`);
});

app.get('/registration', (req, res) => {
  res.sendFile(`${base}/registration.html`);
});

app.get('/login', (req, res) => {
  res.sendFile(`${base}/login.html`);
});


app.get('*', (req, res) => {
  res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
