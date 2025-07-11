import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';
import usersRouter from './src/routes/users.routes.js';
import authRouter from './src/routes/auth.routes.js';
import { authentication } from './src/middlewares/authentication.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Rutas públicas
app.use('/auth', authRouter);

// Rutas protegidas
app.use('/api/products', authentication, productsRouter);
//app.use('/api/users', authentication, usersRouter);

// Middleware para manejar errores 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Recurso no encontrado' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API REST escuchando en http://localhost:${PORT}`);
});
