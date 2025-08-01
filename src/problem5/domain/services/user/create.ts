import * as UserRepository from '../../../repositories/user'
import User from '../../../models/user.model'


export async function createUser(data: Partial<User>): Promise<User> {
  return await UserRepository.create(data)
}
