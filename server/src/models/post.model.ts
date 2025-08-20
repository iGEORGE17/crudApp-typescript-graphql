import { Document, model, Schema, Types, models } from "mongoose";
import { IUser } from "./user.model";


export interface IPost extends Document {
  _id: Types.ObjectId; 
  title: string;
  content: string;
  author: Types.ObjectId | string; // This should ideally be a User type or interface
  tags?: string[];
  createdAt: Date | string; // Use Date or string for ISO date format
  updatedAt: Date | string; // Use Date or string for ISO date format
}


const postSchema = new Schema({ // Automatically generate ObjectId
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [{ type: String }],
}, {
  timestamps: true,
});


const PostModel = models.Post || model<IPost>('Post', postSchema);

export default PostModel;