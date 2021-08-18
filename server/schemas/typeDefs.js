const { gql } = require('apollo-server-express');

//https://www.howtographql.com/basics/2-core-concepts/

//In this example...
/*
  type Person {
    name: String!
    age: Int!
    posts: [Post!]! //Each person has MANY posts; hence the []. 
  }

  type Post {
    title: String!
    author: Person!  //every Post NEEDS to be associated with a Person (author)
  }

  PERSON:POST is a defined one-to-many RELATION.
*/


const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }
`

