// types/context.ts or wherever you define your context
import { Model } from 'mongoose';
import { IPost } from './models/post.model';
import { IUser } from './models/user.model';


export interface ApolloContext {
  models: {
    UserModel: Model<IUser>;
    PostModel: Model<IPost>; 
  };
  userId: string | null;
  isAuthenticated: boolean;
}