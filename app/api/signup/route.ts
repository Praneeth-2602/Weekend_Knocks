import { NextResponse } from "next/server";
import User from "@/models/User";
const POST = async (req: Request) => {
  const data = await req.json();
  const { firstName, lastName, email, password, mobile } = data as {
    firstName: string;
    lastName:string,
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
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      mobile,
    });
    await newUser.save();
  }
  return NextResponse.json({ data });
};
export { POST };
