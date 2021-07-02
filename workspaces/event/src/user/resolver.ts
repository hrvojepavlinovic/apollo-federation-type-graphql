import { Resolver, FieldResolver, Root } from 'type-graphql'

import { User } from './user'
import { events } from '../data'
import { Event } from '../event'

@Resolver(() => User)
export class UserEventsResolver {
  @FieldResolver(() => [Event])
  public events (@Root() user: User): Event[] {
    return events.filter(event => event.users.find(eventUser => eventUser.id === user.id))
  }
}
