import mongoose from "mongoose";
import PostModel from "../../models/post.model";
import { PostModule } from "./generated-types/module-types";
import { mapDocumentToGraphQL } from "../../utils/mapper";



export const resolvers: PostModule.Resolvers = {
    Query: {
        posts: async (_, __, { models }) => {
            return models.PostModel.find().populate('author');
        },
        post: async (_, { id }, { models }) => {
            return models.PostModel.findById(id).populate('author');
        },
        postsByAuthor: async (_, __, { models, user }) => {
            if (!user) {
                throw new Error('Not authenticated');
            }
            return models.PostModel.find({ author: user.id }).populate('author');
        }
    },
    Mutation: {
        createPost: async (_, { title, content, tags }, { models, auth }) => {
            if (!auth || !auth.user) {
                throw new Error('Not authenticated');
            }
            const post = new models.PostModel({
                title,
                content,
                tags,
                author: auth.user._id, // Assuming user.id is the ObjectId of the user
            });
   
            await post.save();

            return {
                ...mapDocumentToGraphQL(post), // convert Mongoose doc to plain object
                author: {
                    ...mapDocumentToGraphQL(auth.user)// map _id to GraphQL ID
                },
            }
        },
        updatePost: async (_, { id, title, content }, { models, auth }) => {
           if (!auth || !auth.user) {
                throw new Error('Not authenticated');
            }
            return models.PostModel.findByIdAndUpdate(id, { title, content }, { new: true });
        },
        deletePost: async (_, { id }, { models, auth }) => {
            if (!auth || !auth.user ) {
                throw new Error('Not authenticated');
            }
            return models.PostModel.findByIdAndDelete(id);
        }
    },

}