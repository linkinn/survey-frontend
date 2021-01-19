import faker, { fake } from 'faker'

import { AuthenticationParams } from '@/domain/usecases/authentication'
import { AccountModel } from '../models/account-model'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}

export const mockAccount = (): AccountModel => {
  return {
    accessToken: faker.random.uuid()
  }
}
