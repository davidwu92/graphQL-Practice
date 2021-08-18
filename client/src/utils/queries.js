import { gql } from '@apollo/client';

//handle the GET stuff (asking server for info)

const queriesInfo={
  /*
  2:04 https://www.howtographql.com/basics/2-core-concepts/

  ~~~Fetching Data with Queries~~~~

  REST APIs: 
    ~Data is loaded from specific endpoints
    ~each endpoint returns a fixed data structure.
  GRAPHQL QUERIES:
    ~SINGLE-ENDPOINT.
    ~Flexible data-fetching.
    ~CLIENT DECIDES what data is actually needed. 
    ~CLIENT needs to send more info to express data needs (this information is a QUERy)

*/
}

const queryExample={
/* QUERY:
  {
    allPersons {     
      name
    }
  }
*/
//allPersons field is the ROOT FIELD. everything that follows is the PAYLOAD.

//This query should return a list of all persons stored in db....
/* RETURNS 
  {
    "allPersons": [
      {"name": "Johnny" },
      {"name": "Alice" },
      {"name": "Sarah" }
    ]
  }
*/

//by including age in the payload, server will also include age of each person in response.
/* QUERY:
  {
    allPersons {     
      name
      age
    }
  }
*/

/*RETURNS
  {
    "allPersons": [
      {"name": "Johnny", "age": 23 },
      {"name": "Alice", "age": 28 },
      {"name": "Sarah", "age": 21 }
    ]
  }
*/
}

const queryArguments = {
//In a GraphQL Query, each field can have 0 or more arguments if that is specified in the graphQL Schema.

/* QUERY: this "last" parameter tells us to return a specific number of persons.
  {
    allPersons (last: 2){    
      name
      age
    }
  }
*/

/* RETURNS the last 2 persons stored in db.
  {
    "allPersons": [
      {"name": "Alice", "age": 28 },
      {"name": "Sarah", "age": 21 }
    ]
  }
*/
}

const queryingNestedData = {

/* QUERY: I want all persons, with names, and their posts, and the titles.
  {
    allPersons {    
      name
        posts {
          title
        }
    }
  }
*/


/* RETURNS: Each person, with a list of posts, with their titles.
  {
    "allPersons": [
      {
        "name": "Johnny",
        "posts: [
          {"title": "GraphQl is cool",}
          {"title": "Relay is a powerful GraphQL Client"}
        ]
      },
      {
        "name": "Alice",
        "posts: [
          {"title": "Alice's first post"}
        ]
      },
      {
        "name": "Sarah",
        "posts: []
      }
    ]
  }
*/
}

//example from classcontent
export const QUERY_ME = gql`
  {
    me {
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