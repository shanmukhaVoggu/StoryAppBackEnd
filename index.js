const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Details {
    name: String
    bio: String
  }

  type Query {
    getUserDetails: Details
  }

  type Mutation {
    addProfilePicture(uri: String): String
  }
`;

    const shanmukha = 
    {
      name: 'Shanmukha Srinivas Voggu',
      bio: 'Good Chess Player and enthusiastic developer',
    };
  

  const resolvers = {
    Query: {
        getUserDetails: () => shanmukha,
    },
    Mutation: {
        addProfilePicture: (_, { uri }, { dataSources }) =>{
            console.log("saved......" + uri +"......to database");
            return uri;
        }
    }
  };

  const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });