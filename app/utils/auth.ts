import jwt from "jsonwebtoken";

interface TokenPayload {
  userId: string;
  email: string;
}

const generateAuthToken = (userId: string, email: string) => {
  return jwt.sign(
    { userId, email },
    process.env.JWT_SECRET || "tr$5%9)oe,b<",
    { expiresIn: "7d" } 
  );
};
export {generateAuthToken}