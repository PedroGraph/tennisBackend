import jwt from 'jsonwebtoken';

export const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, 'tu_secreto', (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.user = decodedToken;
    next();
  });
};
