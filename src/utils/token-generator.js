import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secretKey = process.env.JWT_SECRET_KEY;
const expirationTime = process.env.JWT_EXPIRATION_TIME || '1h'; 

export const generateToken = (user) => {
  if (!secretKey) {
    throw new Error('JWT secret key is not defined in the environment variables');
  }

  const payload = {
    id: user.id,
    email: user.email,
  };

  const options = {
    expiresIn: expirationTime, 
  };

  return jwt.sign(payload, secretKey, options);
}