import * as UserRepository from '../../../repositories/user'
import {SearchUserData} from '../../entities/user/search/searchUserData'
import {SearchUserFilter} from '../../entities/user/search/searchUserFilter'


export async function searchUser(filter: SearchUserFilter): Promise<SearchUserData> {
  const searchResults = await UserRepository.search(filter)

  return {
    count: searchResults?.count || 0,
    rows: searchResults?.rows || [],
  } as SearchUserData
}
