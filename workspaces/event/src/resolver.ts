import {
  Query,
  Resolver
} from 'type-graphql'

import { events } from './data'
import { Event } from './event'

@Resolver(() => Event)
export class EventResolver {
  @Query(() => [Event])
  events (): Event[] {
    return events
  }

  @Query(() => Event)
  event (): Event {
    return events[0]
  }
}
