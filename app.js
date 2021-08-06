const https = require('https');
const express = require('express');

const production = (process.argv[2] === 'dev' ? false : true);

const app = express();
const port = 5000;

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
  res.download(`${__dirname}/static/resume.pdf`);
});

if (production) {
  console.log('prod');
  // TODO: get credentials

  // startup https server
  const httpsServer = https.createServer()

} else {
  console.log('dev');
  // simple dev startup
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}