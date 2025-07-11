import { generateToken } from "../utils/token-generator.js";

const default_user = {
  id: 1,
  email: "user@email.com",
  password: "password123",
};

export async function login(req, res) {
  const { email, password } = req.body;

  const user = { id: 1, email };
  // Simulate user authentication
  if (email === default_user.email && password === default_user.password) {
    const token = generateToken(user);
    return res.status(200).json({ token, user: { id: user.id, email: user.email } });
  }

  return res.status(401).json({ message: "Credenciales inválidas" });
}
