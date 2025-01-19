import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {verify} from "jsonwebtoken"
import dotenv from "dotenv"
import { Types } from "mongoose";
import User from "@/models/User";
dotenv.config()
const JWT_SECRET = (process.env.JWT_SECRET as string) || 'tr$5%9)oe,b<'

const middleware = async(req:NextRequest,res:NextResponse) =>{
    try {
      const token = req.cookies.get("auth-token");
      if (!token) {
        return NextResponse.json({ error: 'No token provided' },{status:401});
      }
      const decoded = verify(token.value, process.env.JWT_SECRET!) as {
        id: Types.ObjectId;
        email: string;
        firstName: string;
        lastName: string;
        mobile: number;
        emailVerified: boolean
      }
      const user = await User.findById(decoded.email);
      if (!user) {
        return NextResponse.json(
          { Error: "User not found" }, 
          { status: 401 }
        );
      }
      return NextResponse.json(
        { 
          valid: true,
          user: {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          }
        }, 
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

}
//fill up the matchers as more pages are created
export const config = {
  matcher:[

  ]
}