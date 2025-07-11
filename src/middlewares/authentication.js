import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Chequear si el header existe y tiene el formato correcto
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
    req.user = decoded; // Guardar la información del usuario decodificada en el request
    next();
  });
};
