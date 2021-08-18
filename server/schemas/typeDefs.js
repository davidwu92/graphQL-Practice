const { gql } = require('apollo-server-express');

//https://www.howtographql.com/basics/2-core-concepts/

const typeDefsInfo ={
  //In this SDL (Schema Definition Language) example...
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

  type Person {
    id: ID!
    name: String!
    age: Int!
  }
*/
}

const definingASchema ={
  //The schema specifies the capabilities of the API and defines how clients can request the data.
  //Basically a contract between the server and client.

  //Generally, a schema is a collection of GraphQL types.
  //However, when writing the schema for an API, there are some special root types:
/*
  type Query { ... }
  type Mutation { ... }
  type Subscription { ... }
*/
  //these are the ENTRY POINTS for requests sent by the client. NECESSARY for queries and mutations and subscriptions to work.

/* Allows us to use the allPersons query from queries.js:25
  type Query {
    allPersons: [Person!]!
  }
...to access the Person type as defined in line 8. */
//allPersons is the root field of the api. 

/* Allows the "last argument" in the allPersons field (queries.js:70):
  type Query {
    allPersons(last: Int): [Person!]!
  }
*/

/* Allows createPerson mutation to have arguments (mutations.js:14)
  type Mutation {
    createPerson(name: String!, age: Int!): Person!
  }
*/

/* Finally, for subscriptions (mutations.js:59)...
type Subscription {
  newPerson: Person!
}
*/
}

const fullSchemaExample = {
//https://www.howtographql.com/basics/2-core-concepts/

/*
  type Query {
    allPersons(last: Int): [Person!]!
    allPosts(last: Int): [Post!]!
  }

  type Mutation {
    createPerson(name: String!, age: Int!): Person!
    updatePerson(id: ID!, name: String!, age: String!): Person!
    deletePerson(id: ID!): Person!
  }

  type Subscription {
    newPerson: Person!
  }

  type Person {
    id: ID!
    name: String!
    age: Int!
    posts: [Post!]!
  }

  type Post {
    title: String!
    author: Person!
  }
*/
}

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

type Auth {
  token: ID!
  user: User
}

input BookInput {
  authors: [String]
  description: String!
  bookId: String!
  image: String
  link: String
  title: String!
}

type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: BookInput!): User
  removeBook(bookId: ID!): User
}
`

module.exports = typeDefs;