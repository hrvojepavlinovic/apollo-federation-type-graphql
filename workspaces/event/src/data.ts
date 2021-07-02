import { users } from 'user/src/data'
import { Event } from './event'

export const events: Event[] = [
  {
    id: '1',
    name: 'Event 1',
    location: 'Croatia',
    users
  }, {
    id: '2',
    name: 'Event 2',
    location: 'Greece',
    users: [users[0]]
  }
]
