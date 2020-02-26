import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {resolvers} from "./resolvers";
import {typeDefs} from "./typeDefs";

const { ApolloServer, gql } = require('apollo-server');

// Если есть соединения выполняем это вот
createConnection().then(async connection => {
    // код, который создаёт соединение и добавляет туда нового юзера
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));


//------------------------
// Запуск сервера 
//------------------------
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
