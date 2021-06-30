import {
    ApolloServer,
    gql,
} from 'apollo-server'

const typeDefs = gql`
  type Query {
    user: User
  }

  type User {
    id: ID!
    username: String
  }
`

const resolvers = {
    Query: {
        user() {
            return { id: 1, username: 'Harvey' }
        },
    },
}

const server = new ApolloServer({
    resolvers,
    typeDefs,
})

void server.listen(4001).then(({ url }) => {
    console.log(`🚀 User service ready at ${url}`)
})