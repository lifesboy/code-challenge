import {ApiResponse} from '../../entities/apiResponse'
import {SuccessResponse} from '../../entities/successResponse'
import {ErrorResponse} from '../../entities/errorResponse'
import * as MESSAGES from '../../../domain/messages'
import * as CODES from '../../../domain/codes'
import * as STATUSES from '../../../domain/statuses'
import * as UserUpdateDomainService from '../../../domain/services/user/update'
import {validateUpdateUserReq} from '../../validations/user/update'
import {UpdateUserReq} from '../../entities/user/update/updateUserReq'
import {UpdateUserRes} from "../../entities/user/update/updateUserRes";


export async function updateUser(options: UpdateUserReq): Promise<ApiResponse<UpdateUserRes>> {
  const updateUserReq = await validateUpdateUserReq(options)
  const updateUserRes = await UserUpdateDomainService.updateUser(updateUserReq.id, updateUserReq.data)

  return !!updateUserRes
    ? {
      status: STATUSES.SUCCESS.SUCCESS,
      code: CODES.SUCCESS.SUCCESS,
      data: updateUserRes,
    } as SuccessResponse<UpdateUserRes>
    : {
      status: STATUSES.ERROR.SERVER_ERROR,
      code: CODES.ERROR.SERVER_ERROR,
      message: MESSAGES.ERROR.UPDATE_FAIL,
    } as ErrorResponse<UpdateUserRes>
}
