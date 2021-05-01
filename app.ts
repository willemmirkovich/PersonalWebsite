import express from "express";

const app = express();
const port = 5000;

app.use(express.static(__dirname)); // TODO: modify

app.get('/js', (req, res) => res.sendFile(`${__dirname}/dist/main.js`));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});