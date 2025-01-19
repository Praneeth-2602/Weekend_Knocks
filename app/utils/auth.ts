import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
interface TokenPayload {
  userId: string;
  email: string;
}

const JWT_SECRET = process.env.JWT_SECRET as string;

const generateAuthToken = (userId: string, email: string) => {
  return jwt.sign(
    { userId, email },
    JWT_SECRET,
    { expiresIn: "7d" } 
  );
};
export {generateAuthToken}