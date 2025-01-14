import { NextResponse } from "next/server";
import User from "@/models/User";
const POST = async (req: Request) => {
  const data = await req.json();
  const { name, email, password, mobile } = data as {
    name: string;
    email: string;
    password: string;
    mobile: number;
  };
  if(!name || !email || !password || !mobile){
    return NextResponse.json({Error:'Missing required fields'},{status:400})
  }
  const user = await User?.findOne({
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
  }
  return NextResponse.json({data})
};
export { POST };
