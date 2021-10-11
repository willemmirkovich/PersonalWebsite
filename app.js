const https = require('https');
const express = require('express');
const fs = require('fs');

const production = (process.argv[2] === 'dev' ? false : true);

const app = express();
const port = 4000;

app.use(express.static(__dirname)); // TODO: modify
/*
app.use(express.static(`${__dirname}/static/`));
app.use(express.static(`${__dirname}/dist/`));
*/

app.get('/js', (req, res) => res.sendFile(`${__dirname}/dist/main.js`));

app.get('/css', (req, res) => res.sendFile(`${__dirname}/node_modules/bootstrap/dist/css/bootstrap.min.css`));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

// TODO: figure out react routing solution

app.get('/resume', (req, res) => {
  res.download(`${__dirname}/static/WillemMirkovichResume.pdf`);
});

if (production) {
  console.log('Starting up htps server');

  // credentials
  const cert = fs.readFileSync('./hidden/cert.crt');
  const key = fs.readFileSync('./hidden/key.pem');

  // startup https server
  const server = https.createServer({key: key, cert: cert}, app);
  server.listen(443, () => {
    console.log(`Server is running over https at https://localhost:${443}`);
  });

} else {
  console.log('Starting up http server');

  // simple dev startup
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}