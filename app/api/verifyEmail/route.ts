import { NextResponse } from "next/server";
import User from "@/models/User";
import jwt from "jsonwebtoken"
const JWT_SECRET = (process.env.JWT_SECRET as string) || 'tr$5%9)oe,b<'
import { generateAuthToken } from "@/app/utils/auth";

/*
Get Request in the format: api/verifyEmail?token=${verificationToken}
*/

const GET = async(req:Request) =>{
    const {searchParams} = new URL(req.url)
    const token = searchParams.get('token')
    if(!token){
        return NextResponse.json({Error:"Missing token"},{status:400})
    }
    try{
        const decoded = jwt.verify(token,JWT_SECRET) as {email:string}
        const user = await User.findOne({email:decoded.email})
        if(!user){
            return NextResponse.json({Error:"User not found"},{status:404})
        }
        if(user.emailVerified){
            return NextResponse.json({message:"User already verified"},{status:200})
        }
        user.emailVerified = true;
        await user.save()
        const authToken = generateAuthToken(user._id.toString(),user.email)
        const response = NextResponse.json(
            { 
              message: 'Email verified successfully',
              user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                mobile: user.mobile,
                emailVerified: true
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
    catch(error){
        return NextResponse.json({ Error: 'Invalid or expired token' }, { status: 400 });
    }
}

export {GET}