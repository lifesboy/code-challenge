import * as UserRepository from '../../../repositories/user'
import {DetailUserData} from '../../entities/user'


export async function detailUser(id: number): Promise<DetailUserData | null> {
  return await UserRepository.getById(id)
}
