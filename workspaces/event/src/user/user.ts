import { Directive, ObjectType, Field, ID } from 'type-graphql'

@Directive('@extends')
@Directive('@key(fields: "id")')
@ObjectType()
export class User {
  @Directive('@external')
  @Field(() => ID)
  id: string
}
