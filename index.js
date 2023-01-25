import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import * as Query from "./src/resolvers/Query.js";
import * as Mutation from "./src/resolvers/Mutation.js";

const resolvers = { Query, Mutation };
const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./src/schema.graphql", "utf-8"),
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => ({ ...req, prisma }),
});

console.log(`🚀  Server ready at: ${url}`);
