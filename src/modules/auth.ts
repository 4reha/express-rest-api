import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../db';



export const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer)  {
    res.status(401);
    res.json({message: 'Unauthorized'});
    return;
  }
  const [, token] = bearer.split(' ');
  if (!token) {
    res.status(401);
    res.json({message: 'Unauthorized'});
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    const user = prisma.user.findUnique({
			where: {
				username: req.user.username,
			},
		}).then((user) => {
      if (!user) {
        res.status(404);
        res.json({ message: 'Unauthorized' });
        return
      };
    });
    next();
  } catch(e) {
    console.error(e);
    res.status(401);
    res.json({message: 'Unauthorized'});
    return;
  };
};