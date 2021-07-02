import {
  Query,
  Resolver
} from 'type-graphql'

import { users } from './data'
import { User } from './user'

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  users (): User[] {
    return users
  }

  @Query(() => User)
  user (): User {
    return users[0]
  }
}
