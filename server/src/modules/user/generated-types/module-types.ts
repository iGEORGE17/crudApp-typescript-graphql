/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace UserModule {
  interface DefinedFields {
    User: 'id' | 'username' | 'email' | 'avatar' | 'bio' | 'isAdmin' | 'createdAt' | 'updatedAt';
    Query: 'me' | 'getUser' | 'listUsers';
    AuthPayload: 'token' | 'user';
    Mutation: 'createUser' | 'loginUser' | 'updateUser' | 'deleteUser';
  };
  
  interface DefinedInputFields {
    UserInput: 'username' | 'email' | 'password';
    LoginInput: 'email' | 'password';
  };
  
  export type User = Pick<Types.User, DefinedFields['User']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type AuthPayload = Pick<Types.AuthPayload, DefinedFields['AuthPayload']>;
  export type UserInput = Pick<Types.UserInput, DefinedInputFields['UserInput']>;
  export type LoginInput = Pick<Types.LoginInput, DefinedInputFields['LoginInput']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type Scalars = Pick<Types.Scalars, 'DateTime'>;
  export type DateTimeScalarConfig = Types.DateTimeScalarConfig;
  
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type AuthPayloadResolvers = Pick<Types.AuthPayloadResolvers, DefinedFields['AuthPayload'] | '__isTypeOf'>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    User?: UserResolvers;
    Query?: QueryResolvers;
    AuthPayload?: AuthPayloadResolvers;
    Mutation?: MutationResolvers;
    DateTime?: Types.Resolvers['DateTime'];
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      username?: gm.Middleware[];
      email?: gm.Middleware[];
      avatar?: gm.Middleware[];
      bio?: gm.Middleware[];
      isAdmin?: gm.Middleware[];
      createdAt?: gm.Middleware[];
      updatedAt?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      me?: gm.Middleware[];
      getUser?: gm.Middleware[];
      listUsers?: gm.Middleware[];
    };
    AuthPayload?: {
      '*'?: gm.Middleware[];
      token?: gm.Middleware[];
      user?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createUser?: gm.Middleware[];
      loginUser?: gm.Middleware[];
      updateUser?: gm.Middleware[];
      deleteUser?: gm.Middleware[];
    };
  };
}