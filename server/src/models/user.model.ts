import mongoose, { model, Types, Schema } from "mongoose";
import bcrypt from "bcryptjs";


export interface IUser extends mongoose.Document {
  _id: Types.ObjectId; // MongoDB ObjectId
  username: string;
  email: string;
  password: string;
  avatar?: string;
  bio?: string;
  isAdmin?: boolean;
  createdAt: Date | string; // Use Date or string for ISO date format
  updatedAt: Date | string; // Use Date or string for ISO date format
  // Method to compare passwords
  comparePassword(candidatePassword: string): Promise<boolean>;
}



const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, default: '' },
  bio: { type: String, default: '' },
  isAdmin: { type: Boolean, default: false },
  password: { type: String, required: true },

}, { timestamps: true });

// Pre-save hook to hash password
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});


userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const UserModel = mongoose.models.User || model<IUser>('User', userSchema);

export default UserModel;

