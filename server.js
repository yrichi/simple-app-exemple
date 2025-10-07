import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (_req, res) => {
  res.send('Hello from Simple App! 🎉');
});

app.get('/healthz', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Simple App listening on port ${port}`);
});
