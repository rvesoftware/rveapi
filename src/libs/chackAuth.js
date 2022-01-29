import { jwt } from "jsonwebtoken";
import config from "./helpers/config.js";

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
