import { User } from "./entity/User";

const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
];

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
      books: () => books
//    getUser: async (_: any, args: any) => {
//      const { id } = args;

//      return await User.findOne({ where: { id: id } });
//    }
  },
  Mutation: {
//    addUser: async (_: any, args: any) => {
//      const { firstName, lastName, age } = args;
//      try {
//        const user = User.create({
//          firstName,
//          lastName,
//          age
//        });
//
//        await user.save();
//
//        return true;
//      } catch (error) {
//        return false;
//      }
//    }
  }
};