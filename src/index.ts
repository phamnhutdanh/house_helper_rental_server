import { ApolloServer } from "@apollo/server";
import * as dotenv from "dotenv";

import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers, typeDefs } from "./graphql";

dotenv.config();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const serverPort = Number(process.env.PORT || 4000);
startStandaloneServer(server, {
  listen: { port: serverPort },
}).then(() => console.log(`API Server ready at port ${serverPort}`));
