import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


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
  const [, token] = bearer.split(/\s+/);
  if (!token) {
    res.status(401);
    res.json({message: 'Invalid token'});
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // console.log(decoded);
    next();
  } catch(e) {
    console.error(e);
    res.status(401);
    res.json({message: 'Invalid Token'});
    return;
  };
};