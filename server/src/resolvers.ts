
import { Article } from "./entity/Article";
import { ResolverMap } from "./types/ResolverType";
import { Image } from "./entity/Image";
import { ImageCategory } from "./entity/ImageCategory";
import { Page } from "./entity/Page";
import { MenuPage } from "./entity/MenuPage";

// Provide resolver functions for your schema fields
export const resolvers: ResolverMap = {
  Query: {
    // стандартные поля (parent, args, context, info) 
    article: (_, { id }) => Article.findOne({ where: { id: id } }),
    articles: () => Article.find(),

    image: (_, { id }) => Image.findOne({ where: { id: id } }),
    images: () => Image.find(),

    imageCategory: (_, { id }) => ImageCategory.findOne({ where: { id: id } }),
    imageCategories: () => ImageCategory.find(),

    page: (_, { id }) => Page.findOne({ where: { id: id } }),
    pages: () => Page.find(),

    menuPage: (_, { id }) => MenuPage.findOne({ where: { id: id } }),
    menuPages: () => MenuPage.find(),
  },  
  Mutation: {
    createArticle: async (_, args) => Article.create(args).save(),
    updateArticle: async (_, { id, ...args }) => {
      try {
        await Article.update(id, args)
      } catch(err) {
        return false;
      }

      return true;
    },
    deleteArticle: async (_, { id }) => {
      try {
        await Article.remove(id)
      } catch(err) {
        console.log(err);
        return false;
      }

      return true;
    },

    createImage: async (_, args) => Image.create(args).save(),
    updateImage: async (_, { id, ...args }) => {
      try {
        await Image.update(id, args)
      } catch(err) {
        return false;
      }

      return true;
    },
    deleteImage: async (_, { id }) => {
      try {
        await Image.remove(id)
      } catch(err) {
        console.log(err);
        return false;
      }

      return true;
    },

    createImageCategory: async (_, args) => ImageCategory.create(args).save(),
    updateImageCategory: async (_, { id, ...args }) => {
      try {
        await ImageCategory.update(id, args)
      } catch(err) {
        return false;
      }

      return true;
    },
    deleteImageCategory: async (_, { id }) => {
      try {
        await ImageCategory.remove(id)
      } catch(err) {
        console.log(err);
        return false;
      }

      return true;
    },

    createPage: async (_, args) => Page.create(args).save(),
    updatePage: async (_, { id, ...args }) => {
      try {
        await Page.update(id, args)
      } catch(err) {
        return false;
      }

      return true;
    },
    deletePage: async (_, { id }) => {
      try {
        await Page.remove(id)
      } catch(err) {
        console.log(err);
        return false;
      }

      return true;
    },

    createMenuPage: async (_, args) => MenuPage.create(args).save(),
    updateMenuPage: async (_, { id, ...args }) => {
      try {
        await MenuPage.update(id, args)
      } catch(err) {
        return false;
      }

      return true;
    },
    deleteMenuPage: async (_, { id }) => {
      try {
        await MenuPage.remove(id)
      } catch(err) {
        console.log(err);
        return false;
      }

      return true;
    }
  }
};