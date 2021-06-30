import 'reflect-metadata'
import { ApolloGateway } from '@apollo/gateway'
import { ApolloServer } from 'apollo-server'

import { server as userServer } from '../../user/src/server'

const bootstrap = async () => {
    const gateway = new ApolloGateway({
        serviceList: [
            { name: 'users', url: await userServer(4001) },
        ],
    })

    const server = new ApolloServer({
        gateway,
        playground: true,
        subscriptions: false,
    })

    void server.listen({ port: 4000 }).then(({ url }) => {
        console.log(`Apollo Gateway ready at ${url}`)
    })
}

bootstrap().catch(console.error)
