import { userDb } from "@/lib/db";
import { Verified } from "lucide-react";
import { Model, Schema } from "mongoose";
import mongoose from "mongoose"
interface IUser extends Schema {
    firstName: string,
    lastName:string,
    email: string,
    password: string,
    mobile: number,
    emailVerified: boolean,
    mobileVerified: boolean
}

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
    },
    emailVerified:{
        type:Boolean,
        default:false,
    },
    mobileVerified:{
        type:Boolean,
        default:false,
    }

})
const User = (userDb?.models?.User || mongoose.model<IUser>('User', userSchema)) as Model<IUser>;
export type {IUser}
export default User