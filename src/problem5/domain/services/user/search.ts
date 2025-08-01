import * as UserRepository from '../../../repositories/user'
import {SearchUserData} from '../../entities/user'
import {SearchUserFilter} from '../../entities/user'


export async function searchUser(filter: SearchUserFilter): Promise<SearchUserData> {
  const searchResults = await UserRepository.search(filter)

  return {
    count: searchResults?.count || 0,
    rows: searchResults?.rows || [],
  } as SearchUserData
}
