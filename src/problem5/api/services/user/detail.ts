import {ApiResponse} from '../../entities/apiResponse'
import {SuccessResponse} from '../../entities/successResponse'
import {ErrorResponse} from '../../entities/errorResponse'
import * as MESSAGES from '../../../domain/messages'
import * as CODES from '../../../domain/codes'
import * as STATUSES from '../../../domain/statuses'
import * as UserDetailDomainService from '../../../domain/services/user/detail'
import {validateDetailUserReq} from '../../validations/user/detail'
import {DetailUserReq} from '../../entities/user/detail/detailUserReq'
import {DetailUserRes} from '../../entities/user/detail/detailUserRes'


export async function detailUser(options: DetailUserReq): Promise<ApiResponse<DetailUserRes>> {
  const detailUserReq = await validateDetailUserReq(options)
  const detailUserRes = await UserDetailDomainService.detailUser(detailUserReq.id)

  return !!detailUserRes
    ? {
      status: STATUSES.SUCCESS.SUCCESS,
      code: CODES.SUCCESS.SUCCESS,
      data: detailUserRes,
    } as SuccessResponse<DetailUserRes>
    : {
      status: STATUSES.ERROR.SERVER_ERROR,
      code: CODES.ERROR.SERVER_ERROR,
      message: MESSAGES.ERROR.UPDATE_FAIL,
    } as ErrorResponse<DetailUserRes>
}
