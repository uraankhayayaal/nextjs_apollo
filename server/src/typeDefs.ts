// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  
  type Query {
    article(id: Int!): Article!
    articles: [Article!]!
    
    page(id: Int!): Page!
    pages: [Page!]!
    
    menuPage(in: Int!): MenuPage!
    menuPages: [MenuPage!]!

    image(id: Int!): Image!
    images: [Image!]!
    
    imageCategory(id: Int!): ImageCategory!
    imageCategories: [ImageCategory!]!
  }

  type Mutation {
    createArticle(title: String!, content: String!, photo: String!, is_publish: Boolean!, status: Int!, created_at: Int!, updated_at: Int!): Article!
    updateArticle(id: Int!, title: String, content: String, photo: String, is_publish: Boolean, status: Int, updated_at: Int!): Boolean
    deleteArticle(id: Int!): Boolean
  
    createPage(title: String!, link: String!, is_publish: Boolean!, status: Int!, created_at: Int!, updated_at: Int!): Page!
    updatePage(id: Int!, title: String, link: String, is_publish: Boolean, status: Int, updated_at: Int!): Boolean
    deletePage(id: Int!): Boolean

    createMenuPage(title: String!, link: String!, parent: Int, is_publish: Boolean!, status: Int!, created_at: Int!, updated_at: Int!): Page!
    updateMenuPage(id: Int!, title: String, link: String, parent: Int, is_publish: Boolean, status: Int, updated_at: Int!): Boolean
    deleteMenuPage(id: Int!): Boolean
      
    createImage(name: String!, link: String!, is_publish: Boolean!, status: Int!, created_at: Int!, updated_at: Int!): Image!
    updateImage(id: Int!, updated_at: Int!, name: String, link: String, is_publish: Boolean, status: Int): Boolean
    deleteImage(id: Int!): Boolean
      
    createImageCategory(name: String!, is_publish: Boolean!, status: Int!, created_at: Int!, updated_at: Int!): ImageCategory!
    updateImageCategory(id: Int!, updated_at: Int!, name: String, is_publish: Boolean, status: Int): Boolean
    deleteImageCategory(id: Int!): Boolean
  }

  type Article {
    id: Int
    title: String
    content: String
    photo: String
    is_publish: Boolean
    status: Int
    created_at: Int
    updated_at: Int
  }

  type Page {
    id: Int!
    title: String!
    link: String!
    is_publish: Boolean!
    status: Int!
    created_at: Int!
    updated_at: Int!
  }
  
  type MenuPage {
    id: Int!
    title: String!
    link: String!
    parent: Int
    is_publish: Boolean!
    status: Int!
    created_at: Int!
    updated_at: Int!
  }
  
  type Image {
    id: Int!
    name: String!
    link: String!
    is_publish: Boolean!
    status: Int!
    created_at: Int!
    updated_at: Int!
  }
  
  type ImageCategory {
    id: Int!
    name: String!
    is_publish: Boolean!
    status: Int!
    created_at: Int!
    updated_at: Int!
  }
  
  type Partner {
    id: Int!
    name: String!
    photo: String!
    is_publish: Boolean!
    status: Int!
    created_at: Int!
    updated_at: Int!
  }
  
  type Quiz {
    id: Int!
    title: String!
    photo: String!
    sort: Int!
    slug: String!
    meta_keywords: String!
    meta_description: String!
    is_publish: Boolean!
    status: Int!
    created_at: Int!
    updated_at: Int!
  }
  
  type QuizQuestion {
    id: Int!
    title: String!
    sort: Int!
    quiz: Int!
    is_publish: Boolean!
    status: Int!
    created_at: Int!
    updated_at: Int!
  }
  
  type QuizOption {
    id: Int!
    title: String!
    sort: Int!
    src: String!
    question: Int!
    is_publish: Boolean!
    status: Int!
    created_at: Int!
    updated_at: Int!
  }
  
`;