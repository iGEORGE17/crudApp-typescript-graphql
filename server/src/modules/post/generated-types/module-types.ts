/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace PostModule {
  interface DefinedFields {
    Post: 'id' | 'title' | 'content' | 'author' | 'tags' | 'createdAt' | 'updatedAt';
    Query: 'posts' | 'post' | 'postsByAuthor' | 'postsByTag' | 'searchPosts' | 'recentPosts' | 'popularPosts' | 'postsByDateRange' | 'postsByKeyword' | 'postsByTitle' | 'postsByContent';
    Mutation: 'createPost' | 'updatePost' | 'deletePost';
  };
  
  export type Post = Pick<Types.Post, DefinedFields['Post']>;
  export type User = Types.User;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type PostResolvers = Pick<Types.PostResolvers, DefinedFields['Post'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    Post?: PostResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Post?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      title?: gm.Middleware[];
      content?: gm.Middleware[];
      author?: gm.Middleware[];
      tags?: gm.Middleware[];
      createdAt?: gm.Middleware[];
      updatedAt?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      posts?: gm.Middleware[];
      post?: gm.Middleware[];
      postsByAuthor?: gm.Middleware[];
      postsByTag?: gm.Middleware[];
      searchPosts?: gm.Middleware[];
      recentPosts?: gm.Middleware[];
      popularPosts?: gm.Middleware[];
      postsByDateRange?: gm.Middleware[];
      postsByKeyword?: gm.Middleware[];
      postsByTitle?: gm.Middleware[];
      postsByContent?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createPost?: gm.Middleware[];
      updatePost?: gm.Middleware[];
      deletePost?: gm.Middleware[];
    };
  };
}