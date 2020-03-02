// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    article(id: Int!): Article!
    articles: [Article!]!
  }

  type Mutation {
    createArticle(title: String!, content: String!, photo: String!, is_publish: Boolean!, status: Int!, created_at: Int!, updated_at: Int!): Article!
    updateArticle(id: Int!, title: String, content: String, photo: String, is_publish: Boolean, status: Int, updated_at: Int!): Boolean
    deleteArticle(id: Int!): Boolean
  }

  type Article {
    id: Int!
    title: String!
    content: String!
    photo: String!
    is_publish: Boolean!
    status: Int!
    created_at: Int!
    updated_at: Int!
  }

`;