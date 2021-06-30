import { User } from './user'

const createUser = (userData: Partial<User>) => {
  return Object.assign(new User(), userData)
}

export const users: User[] = [
  createUser({
    birthDate: '1815-12-10',
    id: '1',
    name: 'Ada Lovelace',
    username: '@ada'
  }),
  createUser({
    birthDate: '1912-06-23',
    id: '2',
    name: 'Alan Turing',
    username: '@complete'
  })
]
