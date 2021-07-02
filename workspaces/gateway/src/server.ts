import 'reflect-metadata'
import { ApolloGateway } from '@apollo/gateway'
import { ApolloServer } from 'apollo-server'

const main = async () => {
  const gateway = new ApolloGateway({
    serviceList: [
      { name: 'users', url: 'http://localhost:4001' },
      { name: 'events', url: 'http://localhost:4002' }
    ]
  })

  const server = new ApolloServer({
    gateway,
    playground: true,
    subscriptions: false
  })

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`Apollo Gateway ready at ${url}`)
  })
}

main().catch(console.error)
