import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';

const register = async (req, res) => {
  try {
    console.log("b")
    const { username, password, isAdmin } = req.body;
    const user = new User({ username, password, isAdmin });
    await user.save();
    res.json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(200).json({ error: "El correo ya se encuentra registrado" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.SECRET_TOKEN, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { register, login };
