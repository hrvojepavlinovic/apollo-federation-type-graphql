import {
  buildFederatedSchema as buildApolloFederationSchema,
  printSchema
} from '@apollo/federation'
import federationDirectives from '@apollo/federation/dist/directives'
import type { GraphQLResolverMap } from 'apollo-graphql'
import { addResolversToSchema } from 'apollo-graphql'
import { gql } from 'apollo-server'
import { specifiedDirectives } from 'graphql'
import {
  buildSchema,
  createResolversMap
} from 'type-graphql'
import type { BuildSchemaOptions } from 'type-graphql'

export const buildFederatedSchema = async (
  options: Omit<BuildSchemaOptions, 'skipCheck'>,
  referenceResolvers?: GraphQLResolverMap<unknown>
) => {
  const schema = await buildSchema({
    ...options,
    directives: [...specifiedDirectives, ...federationDirectives, ...(options.directives ?? [])],
    skipCheck: true
  })

  const federatedSchema = buildApolloFederationSchema({
    resolvers: createResolversMap(schema) as never,
    typeDefs: gql(printSchema(schema))
  })

  if (referenceResolvers) {
    addResolversToSchema(federatedSchema, referenceResolvers)
  }

  return federatedSchema
}
