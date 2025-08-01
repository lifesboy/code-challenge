import {ApiResponse} from '../../entities/apiResponse'
import {SuccessResponse} from '../../entities/successResponse'
import {ErrorResponse} from '../../entities/errorResponse'
import * as MESSAGES from '../../../domain/messages'
import * as CODES from '../../../domain/codes'
import * as STATUSES from '../../../domain/statuses'
import * as UserDomainService from '../../../domain/services/user'
import {SearchUserReq} from '../../entities/user/search'
import {SearchUserRes} from '../../entities/user/search'
import {validateSearchUserReq} from '../../validations/user'


export async function searchUser(options: SearchUserReq): Promise<ApiResponse<SearchUserRes>> {
  const searchUserReq = await validateSearchUserReq(options)
  const searchUserRes: SearchUserRes = await UserDomainService.searchUser(searchUserReq)

  return !!searchUserRes
    ? {
      status: STATUSES.SUCCESS.SUCCESS,
      code: CODES.SUCCESS.SUCCESS,
      data: searchUserRes as SearchUserRes,
    } as SuccessResponse<SearchUserRes>
    : {
      status: STATUSES.ERROR.SERVER_ERROR,
      code: CODES.ERROR.SERVER_ERROR,
      message: MESSAGES.ERROR.SEARCH_FAIL,
    } as ErrorResponse<SearchUserRes>
}
