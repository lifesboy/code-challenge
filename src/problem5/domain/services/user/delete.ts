import * as UserRepository from '../../../repositories/user'
import {DeleteUserData} from '../../entities/user/delete/deleteUserData'


export async function deleteUser(id: number): Promise<DeleteUserData> {
  const deletedCount = await UserRepository.deleteById(id)

  return deletedCount > 0
}
