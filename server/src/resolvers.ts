
import { Article } from "./entity/Article";
import { ResolverMap } from "./types/ResolverType";

// Provide resolver functions for your schema fields
export const resolvers: ResolverMap = {
  Query: {
    // стандартные поля (parent, args, context, info) 
    article: (_, { id }) => Article.findOne({ where: { id: id } }),
    articles: () => Article.find()
  },  
  Mutation: {
    createArticle: (_, args) => Article.create(args).save(),
    updateArticle: (_, { id, ...args }) => {
      try {
        Article.update(id, args)
      } catch(err) {
        console.log(err);
        return false;
      }

      return true;
    },
    deleteArticle: (_, { id }) => {
      try {
        Article.remove(id)
      } catch(err) {
        console.log(err);
        return false;
      }

      return true;
    },
  }
};