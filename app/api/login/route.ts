import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { generateAuthToken } from "@/app/utils/auth";

/*
POST request in the format {email : string, password : string}
A successful response would return 200 status code and returns a cookie as a header as auth_token with all user details
*/

const POST = async(req:Request)=>{

    const {email,password} = await req.json()

    const user = await User.findOne({email})

    if (!user) {
        return NextResponse.json(
          { Error: "Invalid credentials" },
          { status: 401 }
        );
      }
      if (!user.emailVerified) {
        return NextResponse.json(
          { Error: "Please verify your email first" },
          { status: 401 }
        );
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return NextResponse.json(
          { Error: "Invalid credentials" },
          { status: 401 }
        );
      }
      const authToken = generateAuthToken(user._id.toString(), user.email);

      const response = NextResponse.json(
        {
          message: "Login successful",
          user: {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            mobile: user.mobile,
          }
        },
        { status: 200 }
      );
      response.cookies.set({
        name: 'auth_token',
        value: authToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' || false,
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 
      });
    
      return response;


}
export {POST}