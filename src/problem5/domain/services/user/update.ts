import * as UserRepository from '../../../repositories/user'
import {UpdateUserData} from '../../entities/user/update/updateUserData'


export async function updateUser(id: number, data: UpdateUserData): Promise<UpdateUserData> {
  const updateResult = await UserRepository.updateById(id, data)

  return updateResult && updateResult[1] && updateResult[1][0]
}
