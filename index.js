import express from 'express';
import userRoutes from './src/routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Internal server error!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
