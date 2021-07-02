import {
  Field,
  ID,
  ObjectType
} from 'type-graphql'
import { User } from './user/user'

@ObjectType()
export class Event {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  location: string

  users: User[]
}
