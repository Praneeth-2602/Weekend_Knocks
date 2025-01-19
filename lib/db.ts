import mongoose from "mongoose"
import { config } from "dotenv"
config()

const MONGO_URI = process.env.MONGO_URI as string


const connect = async(uri: string, db: string) => {
    try {

            const connector = await mongoose.connect(uri, {
                 dbName: db
             })
             console.log(`${db} connected successfully`)
             return connector
    } catch (error) {
        console.error(error)
    }
}
const userDb = await connect(MONGO_URI, "users")
export {userDb}