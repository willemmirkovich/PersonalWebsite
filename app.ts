import express from "express";

const app = express();
const port = 5000;

app.use(express.static(__dirname)); // TODO: modify
/*
app.use(express.static(`${__dirname}/static/`));
app.use(express.static(`${__dirname}/dist/`));
*/

app.get('/js', (req, res) => res.sendFile(`${__dirname}/dist/main.js`));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

// TODO: figure out react routing solution

app.get('/resume', (req, res) => {
  res.download(`${__dirname}/static/resume.pdf`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
