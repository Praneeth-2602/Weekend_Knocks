import { userDb } from "@/lib/db";
import { Schema } from "mongoose";

interface IUser extends Schema {
    name: string,
    email: string,
    password: string,
    mobile: number,
}

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    mobile: Number
})

const User = userDb?.model<IUser>('User',userSchema)
export type {IUser}
export default User