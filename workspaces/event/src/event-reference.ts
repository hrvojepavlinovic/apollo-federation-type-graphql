import { events } from './data'
import type { Event } from './event'

export const resolveEventReference = (reference: Pick<Event, 'id'>): Event | undefined =>
  events.find((e) => e.id === reference.id)
