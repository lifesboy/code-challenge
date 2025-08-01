import * as UserRepository from '../../../repositories/user'
import {CreateUserData} from '../../entities/user'


export async function createUser(data: CreateUserData): Promise<CreateUserData> {
  return await UserRepository.create(data)
}
