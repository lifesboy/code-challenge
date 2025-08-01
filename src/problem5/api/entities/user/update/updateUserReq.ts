import {UpdateUserData} from '../../../../domain/entities/user/update/updateUserData'

export interface UpdateUserReq {
  id: number
  data: Partial<UpdateUserData>
}