import { users } from './data'
import type { User } from './user'

export const resolveUserReference = (reference: Pick<User, 'id'>): User | undefined =>
    users.find((u) => u.id === reference.id)
