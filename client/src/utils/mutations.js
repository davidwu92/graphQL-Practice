import { gql } from '@apollo/client';

const mutationsInfo={
/* 
  5:00 https://www.howtographql.com/basics/2-core-concepts/

  3 types of mutations: creating, updating, deleting data.
*/
}
const creatingNewData = {
  //Mutations handle the POST, PUT, DELETE stuff. Same syntactical structure as queries, but always need to start with "mutation" keyword.

/* 
    mutation {
      createPerson(name: "Bob", age: 36) {
        name
        age
      }
    }
*/
//ROOT FIELD: createPerson. Takes in 2 arguments for name and age.
//PAYLOAD: name and age; still "asking for these fields"... but we here we don't necessarily need them, since we're passing "Bob" and 36.

/* RETURNS
  "createPerson": {
    "name": "Bob",
    "age": 36,
  }
*/

/* with most typeDefs, we should have an id.
  type Person {
    id: ID!
    name: String!
    age: Int!
  }
*/

/* Create a new Person, and ask directly for the id in payload!
  mutation {
    createPerson(name: "Alice", age: 36) {
      id
    }
  }
*/
}
const subscriptionsInfo ={
/*
  subscriptions allow a realtime connection to the server 
  get immediately informed about important events.

  When a client subscribes to an event, it will initiate and hold a steady connection to the server. 
  Whenever that particular event then actually happens, the server pushes the corresponding data to the client.

  Unlike queries and mutations that follow a typical “request-response-cycle”, subscriptions represent a stream of data sent over to the client.
*/

/* SUBSCRIBE to events happening on the Person type:
  subscription {
    newPerson {
      name
      age
    }
  }
*/

/*After a client sent this subscription to a server, a connection is opened between them. Then, whenever a new mutation is performed that creates a new Person, the server sends the information about this person over to the client:*/

/*
  {
    "newPerson": {
      "name": "Jane",
      "age": 23
    }
  }
*/

}

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
