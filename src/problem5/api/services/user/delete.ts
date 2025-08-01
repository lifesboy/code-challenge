import {ApiResponse} from '../../entities/apiResponse'
import {SuccessResponse} from '../../entities/successResponse'
import {ErrorResponse} from '../../entities/errorResponse'
import * as MESSAGES from '../../../domain/messages'
import * as CODES from '../../../domain/codes'
import * as STATUSES from '../../../domain/statuses'
import * as UserDomainService from '../../../domain/services/user'
import {validateDeleteUserReq} from '../../validations/user'
import {DeleteUserReq} from '../../entities/user/delete'
import {DeleteUserRes} from '../../entities/user/delete'


export async function deleteUser(options: DeleteUserReq): Promise<ApiResponse<DeleteUserRes>> {
  const deleteUserReq = await validateDeleteUserReq(options)
  const deleteUserRes = await UserDomainService.deleteUser(deleteUserReq.id)

  return !!deleteUserRes
    ? {
      status: STATUSES.SUCCESS.SUCCESS,
      code: CODES.SUCCESS.SUCCESS,
      data: deleteUserRes,
    } as SuccessResponse<DeleteUserRes>
    : {
      status: STATUSES.ERROR.SERVER_ERROR,
      code: CODES.ERROR.SERVER_ERROR,
      message: MESSAGES.ERROR.DELETE_FAIL,
    } as ErrorResponse<DeleteUserRes>
}
