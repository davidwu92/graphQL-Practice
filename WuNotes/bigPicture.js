//BIG PICTURE (Architecture)
// https://www.howtographql.com/basics/3-big-picture/


//GraphQL has been released only as a specification
//it's just a long document that describes in detail the behavior of a GraphQL server.

const useCases = {

  //You'll have to build GraphQL server yourself, in any programming language.

  /*
    1. GraphQL server w/ a connected database. Simple Setup.
    2. GraphQL server that is a thin layer in front of a number of 3rd party or legacy systems.
      Integrates these systems thorugh a single GraphQL API.
    3. Hybrid approach (connected database and integration of existing systems
      that can all be accessed through the same GraphQL API)
  */
}

const gqlServerConnectedDB = {
  //often in greenfield (built-from-scratch) projects.
  //uses single web server that implements GraphQL.
  
  //when query arrives @ gql server, server reads payload and fetches required info from db. 
  //this is called RESOLVING the query. Hence, resolvers.js.
  //Server then constructs RESPONSE (object) with data fetched from db and returns it to client.

  /*
  GraphQL is "TRANSPORT LAYER AGNOSTIC": can potentially be used w/ any available network protocol.
    Network protocols include Internet Protocol IP, Hyper Text Transfer Protocol HTTP, HTTPS, FTP, etc.

  GraphQL doesn't care about db or the format used to store data.
    Can use SQL like AWS Aurora or noSQL like MongoDB.

  */
}
