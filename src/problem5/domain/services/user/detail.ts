import * as UserRepository from '../../../repositories/user'
import {DetailUserData} from '../../entities/user/detail/detailUserData'


export async function detailUser(id: number): Promise<DetailUserData> {
  return await UserRepository.getById(id)
}
