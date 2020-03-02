import "reflect-metadata";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { createConnection } from "typeorm";

const { ApolloServer, gql } = require('apollo-server');

// Создаётся соединение с базой, если создалось - врубаем сервер
createConnection().then(() => {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}).catch(error => console.log(error)) 

