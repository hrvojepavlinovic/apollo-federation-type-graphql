import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'

import { EventResolver } from './resolver'
import { Event } from './event'
import { buildFederatedSchema } from 'common/build-federated-schema'
import { resolveEventReference } from './event-reference'
import { UserEventsResolver } from './user/resolver'
import { User } from './user/user'

export const server = async (options: { port: number }): Promise<string> => {
  const schema = await buildFederatedSchema(
    {
      resolvers: [EventResolver, UserEventsResolver],
      orphanedTypes: [Event, User]
    },
    {
      Event: { __resolveReference: resolveEventReference }
    }
  )

  const apolloServer = new ApolloServer({ schema })

  const { url } = await apolloServer.listen({ port: options.port })
  console.log(`User service ready at ${url}`)

  return url
}

server({ port: 4002 }).catch(console.error)
