import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectDB from "./utils/db";
import dotenv from "dotenv";
import { getUserFromToken } from "./utils/token";
import PostModel from "./models/post.model";
import UserModel from "./models/user.model";

dotenv.config();

// Load typedefs & resolvers dynamically
const typesArray = loadFilesSync("src/modules/**/*.graphql");
const resolversArray = loadFilesSync("src/modules/**/resolvers.ts");


const server = new ApolloServer({
  typeDefs: mergeTypeDefs(typesArray),
  resolvers: mergeResolvers(resolversArray),
});

async function startApolloServer() {
  await connectDB(); // Ensure the database connection is established
  const { url } = await startStandaloneServer(server, {

    context: async ({ req }) => {
      // Extract user ID from the Authorization header
      const token = req.headers.authorization?.split("Bearer ")[1] as string;
      const auth = getUserFromToken(token);


      // Return the context object with models and userId
      return {
        models: {
          UserModel,
          PostModel
        },
        auth,
        
      };
    },
  });
  
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();

