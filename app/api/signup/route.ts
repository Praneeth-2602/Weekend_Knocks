import { NextResponse } from "next/server";
import User from "@/models/User";
import { VerificationEmail } from "@/components/email/VerificationEmail";
import renderEmail from "@/app/utils/renderEmail";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendEmail from "@/app/utils/sendEmail";


//BASE_URL is the website url
const BASE_URL = (process.env.BASE_URL as string) || "http://localhost:3000";
const JWT_SECRET = (process.env.JWT_SECRET as string) || "tr$5%9)oe,b<";

/* 
Post request accepts body as {firstName : string, lastName : string, email : string, password : string, mobile : number}
A successful response with email being sent would return 201 status code
Rest all codes return invalid response
*/

const POST = async (req: Request) => {
  const data = await req.json();
  const { firstName, lastName, email, password, mobile } = data as {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobile: number;
  };
  if (!firstName || !lastName || !email || !password || !mobile) {
    return NextResponse.json(
      { Error: "Missing required fields" },
      { status: 400 }
    );
  }
  const user = await User.findOne({
    $or: [
      {
        mobile: mobile,
        email: email,
      },
    ],
  });
  if (user) {
    return NextResponse.json(
      { Error: "User with the email or phone number already exists" },
      {
        status: 400,
      }
    );
  } else {
    //checking valid email
    const emailRegex =
      /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\ \[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?| \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\ \[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ Error: "Invalid email" }, { status: 400 });
    }
    //checking valid password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          Error:
            "Password must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters",
        },
        { status: 400 }
      );
    }
    //checking valid mobile
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile.toString())) {
      return NextResponse.json(
        { Error: "Invalid mobile number" },
        { status: 400 }
      );
    }

    const hashedPass = await bcrypt.hash(password, 10);
    const verificationToken = jwt.sign({ email: email }, JWT_SECRET, {
      expiresIn: "24h",
    });
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPass,
      mobile,
    });
    await newUser.save();

    const html = await renderEmail(
      VerificationEmail({
        firstName,
        verificationUrl: `${BASE_URL}/api/verifyEmail?token=${verificationToken}`,
      })
    );
    const emailResponse = await sendEmail(
      html,
      `tempuser9001@gmail.com`,
      email
    );

    if (!emailResponse) {
      return NextResponse.json(
        { Error: "Error sending email" },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: "Email sent, kindly verify" },
      { status: 201 }
    );
  }
};
export { POST };
