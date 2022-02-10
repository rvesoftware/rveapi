import jwt  from "jsonwebtoken";
import config from "../helpers/config.js";

export default (context) => {
  // context = { ... headers }
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    // Bearer .....
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, config.JWT_SIGNIN_KEY);
        return user;
      } catch (err) {
        throw new Error(601);
      }
    }

    throw new Error(602);
  }
  throw new Error(603);
};

export const generateToken = (user) => {
  return jwt.sign({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      username: user.username
  }, process.env.JWT_SECRET || 'somethingsecret',{

      expiresIn: '30d',
  } 
  );
};
