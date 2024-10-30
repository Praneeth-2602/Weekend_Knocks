import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    favoriteGames: string[];
    rank: string;
}

const UserSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    favoriteGames: { type: [String], default: [] },
    rank: { type: String, default: 'Unranked' }
});

UserSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const User = model<IUser>('User', UserSchema);

export default User;